'use client';

import { useEffect, useRef, useState } from 'react';
import { GetCompanies } from '../_core/requests';
import { IGetCompanySchema } from '@/app/dashboard/companies/_core/interfaces';
import { toast } from '@/hooks/use-toast';

export default function CompaniesContent() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [companies, setCompanies] = useState<IGetCompanySchema[]>([]);
  const isFetching = useRef<boolean>(false); // Prevent multiple fetches
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const fetchData = async (currentPage: number) => {
    if (isFetching.current) return; // Avoid duplicate requests
    isFetching.current = true;

    try {
      const response = await GetCompanies({ currentPage, per_page: 15, search: '' });

      if (!response || !response.success) {
        toast({
          variant: 'destructive',
          description: 'خطا در دریافت اطلاعات شرکت ها!',
        });
        return;
      }

      const CompanyList: IGetCompanySchema[] = response.data.data;
      setCompanies((prev) => [...prev, ...CompanyList]);
      setLastPage(response.data.last_page);
    } catch (error: unknown) {
      console.error('Error fetching data:', error);
    } finally {
      isFetching.current = false; // Allow subsequent requests
    }
  };

  const handleLoadMore = () => {
    if (observerRef.current) observerRef.current.disconnect();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting && currentPage <= lastPage && !isFetching.current) {
        setCurrentPage((prevPage) => prevPage + 1); // Update page number
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, { threshold: 1 });
    if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);
  };

  useEffect(() => {
    if (currentPage <= lastPage) {
      fetchData(currentPage);
    }
  }, [currentPage, lastPage]); // Trigger fetch when the page changes

  useEffect(() => {
    handleLoadMore();
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  });

  return (
    <div className={'bg-white p-4 rounded max-h-[1090px] overflow-y-scroll'}>
      {companies.map((value, key) => (
        <div
          ref={companies.length === key + 1 ? loadMoreRef : undefined}
          key={key}
          className={'p-2'}
        >
          ``
          <p>companyname: {value?.company_name}</p>
          <p>index: {key}</p>
        </div>
      ))}
    </div>
  );
}

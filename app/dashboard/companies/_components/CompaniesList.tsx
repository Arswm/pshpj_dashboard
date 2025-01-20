'use client';

import { useEffect, useRef, useState } from 'react';
import { GetCompanies } from '../_core/requests';
import { IGetCompanySchema } from '@/app/dashboard/companies/_core/interfaces';

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

      const CompanyList: IGetCompanySchema[] = response.data.data;
      if (response.success) {
        setCompanies((prev) => [...prev, ...CompanyList]);
        setLastPage(response.data.last_page);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      isFetching.current = false; // Allow subsequent requests
    }
  };

  const handleLoadMore = () => {
    if (observerRef.current) observerRef.current.disconnect();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      console.log(entries);
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
          <p>companyname: {value?.company_name}</p>
          <p>index: {key}</p>
        </div>
      ))}
    </div>
  );
}

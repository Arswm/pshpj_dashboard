'use client';

import { useEffect, useRef, useState } from 'react';
import { GetCompanies } from '../_core/requests';
import { IGetCompany } from '@/app/dashboard/companies/_core/interfaces';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Label } from '@radix-ui/react-dropdown-menu';
import { toast } from 'sonner';

export default function CompaniesList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [companies, setCompanies] = useState<IGetCompany[]>([]);
  // this renders skelton
  const [isloading, setIsLoading] = useState<boolean>(true);
  // this should be intial count of the pagination 15 products = 15 skeltons
  const [skeltonCount, setSkeltonCount] = useState(15);
  const search = useRef('');
  const isFetching = useRef<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const fetchData = async (currentPage: number) => {
    setIsLoading(true);
    if (isFetching.current) return; // Avoid duplicate requests
    isFetching.current = true;

    try {
      const response = await GetCompanies({ currentPage, per_page: 15, search: search.current });
      if (!response || !response.success) {
        toast.error('خطایی در دریافت شرکت ها به وجود آمده', {
          action: {
            label: 'باشه',
            onClick: () => console.log('باشه'),
          },
        });

        return;
      }

      const CompanyList: IGetCompany[] = response.data.data;

      if (currentPage > 1) {
        setCompanies((prev) => {
          const existingIds = new Set(prev.map((c) => c.id));
          return [...prev, ...CompanyList.filter((c) => !existingIds.has(c.id))];
        });
        setSkeltonCount(companies.length);
      } else {
        setCompanies(CompanyList);
      }

      setLastPage(response.data.last_page);
    } catch (error: unknown) {
      console.error('Error fetching data:', error);
    } finally {
      isFetching.current = false;
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (observerRef.current) observerRef.current.disconnect();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting && currentPage <= lastPage && !isFetching.current) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, { threshold: 1 });
    if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);
  };

  useEffect(() => {
    if (currentPage <= lastPage) {
      fetchData(currentPage);
    }
    // eslint-disable-next-line
  }, [currentPage, lastPage]);

  useEffect(() => {
    handleLoadMore();
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  });

  let setTimer: ReturnType<typeof setTimeout>;

  const handleSearch = (e: any) => {
    if (setTimer) clearTimeout(setTimer);
    setTimer = setTimeout(() => {
      console.log(e.target.value);
      search.current = e.target.value;
      if (currentPage == 1) {
        fetchData(currentPage);
      }
      setCurrentPage(1);
    }, 200);
  };

  const loadingSkelton = new Array(skeltonCount).fill(null);

  return (
    <>
      <div className="min-h-14">
        <Label className="relative flex items-center">
          <div className="absolute flex gap-2 ps-3 items-center text-gray-400 pointer-events-none">
            <Search size={20} />
          </div>
          <Input
            className="border-none h-14 ps-10 rounded-lg shadow"
            placeholder="جستجوی شرکت"
            onChange={handleSearch}
          />
        </Label>
      </div>

      <div className={'bg-white p-4 rounded-lg h-[1010px] overflow-y-scroll mt-6 shadow'}>
        {isloading ? (
          loadingSkelton.map((_, index) => (
            <div
              key={index}
              role="status"
              className="rtl:space-x-revers mb-4 animate-pulse gap-4 space-y-8 rounded border p-4 dark:border-graydark md:flex-col md:items-center md:space-x-8 md:space-y-0"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700">
                  <svg
                    className="h-4 w-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="flex-col justify-end">
                  <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-0 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="grow w-full">
                <div className="bg flex justify-between gap-2 w-full">
                  <div className=" h-10 w-full grow rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="h-10 w-full grow rounded bg-gray-200 dark:bg-gray-700"></div>
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          ))
        ) : companies.length > 0 ? (
          companies.map((company, key) => (
            <div
              ref={companies.length === key + 1 ? loadMoreRef : undefined}
              key={company.id}
              className={`mb-4 flex flex-col gap-5 rounded border p-4 dark:border-form-strokedark`}
            >
              <div className={`flex gap-2`}>
                <div className={`flex w-full gap-4`}>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-slate-600`}
                  >
                    {company.logo ? (
                      <Image
                        className="block rounded-full object-cover object-center"
                        src={company.logo.url}
                        alt={company.logo.alt || ''}
                        title={company.logo.title || ''}
                        width={48}
                        height={48}
                      />
                    ) : (
                      <p>{company.company_name?.charAt(0).toUpperCase()}</p>
                    )}
                  </div>

                  <div className={`grow`}>
                    <div className={`mb-1`}>{`شرکت : ${company.company_name}`}</div>
                    {`مدیر عامل : ${company.owner_name}`}
                  </div>
                </div>
              </div>
              <div className={`grid grid-cols-2 gap-2`}>
                <Button
                  className={`min-w-1/2 mb-4 w-1/2 rounded bg-gray-200 px-4 py-2.5 text-slate-600 transition-all hover:border-transparent hover:bg-primary hover:text-white dark:bg-slate-500 dark:text-gray-2 dark:hover:bg-primary sm:mb-0 sm:w-auto`}
                >
                  ویرایش اطلاعات
                </Button>
                <Button
                  className={`min-w-1/2 mb-4 w-1/2 rounded bg-gray-200 px-4 py-2.5 text-slate-600 transition-all hover:border-transparent hover:bg-primary hover:text-white dark:bg-slate-500 dark:text-gray-2 dark:hover:bg-primary sm:mb-0 sm:w-auto`}
                >
                  مشاهده اطلاعات
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 h-2/4">
            <Image
              className="block size-64"
              src={'/images/not-founds/CompanyNotFound.png'}
              alt=""
              title=""
              width={250}
              height={250}
            />
            <p className="text-lg text-center">موردی یافت نشد !!</p>
          </div>
        )}
      </div>
    </>
  );
}

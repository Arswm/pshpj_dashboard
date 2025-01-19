export default function CompaniesContent() {
  return (
    <div className={"bg-white p-4 rounded"}>
      {Array.from({ length: 4 }).map((item, index) => (
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
          <div className="grow">
            <div className="bg flex justify-between gap-2">
              <div className=" h-10 max-w-[480px] grow rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="h-10 max-w-[480px] grow rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}

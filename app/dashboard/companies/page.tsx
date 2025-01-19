import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RegisterCompanyForm from './_components/RegisterCompanyForm';
import RegisterBrandForm from '@/app/dashboard/companies/_components/RegisterBrandForm';
import { apiFetch } from '@/utils/api';
import { ApiResponse } from '@/types/apiResponse';
import { CompaniesDynamicList } from './_core/interfaces';
import BrandsContent from './_components/BrandsContent';
import CompaniesContent from './_components/CompaniesContent';

async function CompaniesPage() {
  let { data: companiesDynamicList } =
    await apiFetch<CompaniesDynamicList[]>('/panel/list/companies');

  return (
    <>
      <Tabs dir="rtl" defaultValue="Company" className="w-full grid gap-4">
        <div className={'grid gap-4 grid-cols-2'}>
          <div className="bg-white p-2 rounded-lg shadow">
            <TabsList className={'w-full min-h-14 gap-2'}>
              <TabsTrigger
                className={
                  'w-full h-full data-[state=active]:text-white data-[state=active]:bg-primary'
                }
                value="Company"
              >
                ثبت شرکت
              </TabsTrigger>
              <TabsTrigger
                className={
                  'w-full h-full data-[state=active]:text-white data-[state=active]:bg-primary'
                }
                value="Brands"
              >
                ثبت برند
              </TabsTrigger>
            </TabsList>
            <div className="p-2">
              <TabsContent value="Company">
                <RegisterCompanyForm />
              </TabsContent>
              <TabsContent value="Brands">
                <RegisterBrandForm companiesDynamicList={companiesDynamicList} />
              </TabsContent>
            </div>
          </div>
          <TabsContent value="Company">
            <CompaniesContent />
          </TabsContent>

          <TabsContent value="Brands">
            <BrandsContent />
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}

export default CompaniesPage;

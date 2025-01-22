import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RegisterCompanyForm from './_components/RegisterCompanyForm';
import RegisterBrandForm from '@/app/dashboard/companies/_components/RegisterBrandForm';
import BrandsContent from './_components/BrandsList';
import CompaniesContent from './_components/CompaniesList';
import { GetDynamicList } from './_core/requests';

async function CompaniesPage() {
  const dynamicList = await GetDynamicList();

  return (
    <>
      <Tabs dir="rtl" defaultValue="company" className="w-full grid gap-4">
        <div className={'grid gap-8 md:grid-cols-2 p-4 md:p-0'}>
          <div className=" h-full">
            <TabsList className={'w-full min-h-14 gap-2 bg-white p-2 rounded-lg shadow'}>
              <TabsTrigger
                className="w-full h-full data-[state=active]:text-white data-[state=active]:bg-primary"
                value="company"
              >
                ثبت شرکت
              </TabsTrigger>
              <TabsTrigger
                className="w-full h-full data-[state=active]:text-white data-[state=active]:bg-primary"
                value="brands"
              >
                ثبت برند
              </TabsTrigger>
            </TabsList>
            <div>
              <TabsContent value="company">
                <RegisterCompanyForm />
              </TabsContent>
              <TabsContent value="brands">
                <RegisterBrandForm companies={dynamicList?.data || []} />
              </TabsContent>
            </div>
          </div>

          <div className=" h-full">
            <TabsContent value="company" className="mt-0">
              <CompaniesContent />
            </TabsContent>
            <TabsContent value="brands">
              <BrandsContent />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </>
  );
}

export default CompaniesPage;

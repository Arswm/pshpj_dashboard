import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RegisterCompanyForm from './_components/RegisterCompanyForm';
import RegisterBrandForm from '@/app/dashboard/companies/_components/RegisterBrandForm';
import BrandsContent from './_components/BrandsContent';
import CompaniesContent from './_components/CompaniesContent';

async function CompaniesPage() {
  // /api/v1/panel/list/companies

  return (
    <>
      <Tabs dir="rtl" defaultValue="company" className="w-full grid gap-4">
        <div className={'grid gap-4 grid-cols-2'}>
          <div className="bg-white p-2 rounded-lg shadow">
            <TabsList className={'w-full min-h-14 gap-2'}>
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
            <div className="p-2">
              <TabsContent value="company">
                <RegisterCompanyForm />
              </TabsContent>
              <TabsContent value="brands">
                <RegisterBrandForm ICompaniesDynamicList={[]} />
              </TabsContent>
            </div>
          </div>

          <div>
            <TabsContent value="company">
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

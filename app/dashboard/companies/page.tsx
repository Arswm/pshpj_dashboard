"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterCompanyForm from "./_components/RegisterCompanyForm";

function CompaniesPage() {
  return (
    <>
      <div className={"grid gap-4 grid-cols-2"}>
        <Tabs defaultValue="account" className="w-full grid gap-4">
          <div className="bg-white p-2 rounded-lg shadow">
            <TabsList className={"w-full min-h-14 gap-2"}>
              <TabsTrigger
                className={
                  "w-full h-full data-[state=active]:text-white data-[state=active]:bg-primary"
                }
                value="account"
              >
                ثبت شرکت
              </TabsTrigger>
              <TabsTrigger
                className={
                  "w-full h-full data-[state=active]:text-white data-[state=active]:bg-primary"
                }
                value="password"
              >
                ثبت برند
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="bg-white shadow rounded-lg p-2">
            <TabsContent dir="rtl" value="account">
              <RegisterCompanyForm />
            </TabsContent>
            <TabsContent value="password">برند</TabsContent>
          </div>
        </Tabs>
        <div className={"bg-white p-4 rounded"}>left</div>
      </div>
    </>
  );
}

export default CompaniesPage;

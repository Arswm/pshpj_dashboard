"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export interface PostCompanySchema {
  company_name: string;
  owner_name: string;
  national_number?: string;
  registration_number: string;
  economic_identifier?: string;
  telephone_number?: string;
  postal_code?: string;
  address?: string;
  ir_sheba?: string;
  tax?: string;
  account_number?: string;
  card_number?: string;
  card_owner_name?: string;
  website?: string;
  access_token?: string;
  seal?: File | null;
  signature?: File | null;
  logo?: File | null;
  letterhead?: File | null;
}

function CompaniesPage() {
  const form = useForm<PostCompanySchema>();

  const onSubmit = (data: PostCompanySchema) => {
    console.log(data);
  };

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
              <div className={"p-2"}>
                {/* onSubmit={form.handleSubmit(onSubmit)} */}
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className={"w-full"}
                >
                  <div className={"grid gap-4 grid-cols-2"}>
                    <div>
                      <p className="text-sm mb-2">
                        نام شرکت <span className="text-red-500">*</span>
                      </p>

                      <Controller
                        control={form.control}
                        name="company_name"
                        rules={{
                          required: {
                            value: true,
                            message: "نام شرکت اجباری است",
                          },
                          minLength: {
                            value: 3,
                            message: "حداقل سه کارکتر وارد کنید",
                          },
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.company_name &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.company_name && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.company_name.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">
                        مدیر عامل <span className="text-red-500">*</span>
                      </p>
                      <Controller
                        control={form.control}
                        name="owner_name"
                        rules={{
                          required: {
                            value: true,
                            message: "نام مدیر عامل است",
                          },
                          minLength: {
                            value: 2,
                            message: "حداقل دو کارکتر وارد کنید",
                          },
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.owner_name &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.owner_name && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.owner_name.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">شناسه ملی</p>
                      <Controller
                        control={form.control}
                        name="national_number"
                        rules={{
                          minLength: {
                            value: 3,
                            message: "حداقل سه کارکتر وارد کنید",
                          },
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.national_number &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.national_number && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.national_number.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">شماره ثبت</p>
                      <Controller
                        control={form.control}
                        name="registration_number"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.registration_number &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.registration_number && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.registration_number.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">
                        کد اقتصادی <span className="text-red-500">*</span>
                      </p>
                      <Controller
                        control={form.control}
                        name="economic_identifier"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.economic_identifier &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.economic_identifier && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.economic_identifier.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">
                        شماره تماس <span className="text-red-500">*</span>
                      </p>
                      <Controller
                        control={form.control}
                        name="telephone_number"
                        rules={{
                          required: {
                            value: true,
                            message: "فیلد شماره تماس احباری است",
                          },
                          minLength: {
                            value: 8,
                            message: "حداقل ۸ عدد است",
                          },
                          // regex phone comes here
                          //   pattern: {
                          //     value : mobileRegex,
                          //     message : 'یک شماره معتبر وارد کنید'
                          //   }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.telephone_number &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.telephone_number && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.telephone_number.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">کد پستی</p>
                      <Controller
                        control={form.control}
                        name="postal_code"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.postal_code &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.postal_code && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.postal_code.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">وبسایت</p>
                      <Controller
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.website && "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.website && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.website.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">شماره شبا</p>
                      <Controller
                        control={form.control}
                        name="ir_sheba"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.ir_sheba && "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.ir_sheba && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.ir_sheba.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">صاحب حساب</p>
                      <Controller
                        control={form.control}
                        name="card_owner_name"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.card_owner_name &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.card_owner_name && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.card_owner_name.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">شماره کارت</p>
                      <Controller
                        control={form.control}
                        name="card_number"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.card_number &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.card_number && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.card_number.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">درصد مالیات</p>
                      <Controller
                        control={form.control}
                        name="tax"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.tax && "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.tax && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.tax.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div className="col-span-2">
                      <p className="text-sm mb-2">توکن دسترسی سایت</p>
                      <Controller
                        control={form.control}
                        name="access_token"
                        render={({ field }) => (
                          <Input
                            {...field}
                            className={
                              form.formState.errors.access_token &&
                              "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.access_token && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.access_token.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">امضای شرکت</p>
                      <Controller
                        control={form.control}
                        name="signature"
                        render={({ field: { onChange, name, ref } }) => (
                          <Input
                            name={name}
                            ref={ref}
                            onChange={(e) => onChange(e.target?.files?.[0])}
                            type="file"
                            accept="image/*" // Adjust for your allowed file types
                            className="border p-2 rounded"
                          />
                        )}
                      />
                      {form.formState.errors.signature && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.signature.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">مهر شرکت</p>
                      <Controller
                        control={form.control}
                        name="seal"
                        render={({ field: { onChange, name, ref } }) => (
                          <Input
                            name={name}
                            ref={ref}
                            onChange={(e) => onChange(e.target?.files?.[0])}
                            type="file"
                            accept="image/*" // Adjust for your allowed file types
                            className="border p-2 rounded"
                          />
                        )}
                      />
                      {form.formState.errors.seal && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.seal.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">لوگوی شرکت</p>
                      <Controller
                        control={form.control}
                        name="logo"
                        render={({ field: { onChange, name, ref } }) => (
                          <Input
                            name={name}
                            ref={ref}
                            onChange={(e) => onChange(e.target?.files?.[0])}
                            type="file"
                            accept="image/*" // Adjust for your allowed file types
                            className="border p-2 rounded"
                          />
                        )}
                      />
                      {form.formState.errors.logo && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.logo.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div>
                      <p className="text-sm mb-2">سربرگ شرکت</p>
                      <Controller
                        control={form.control}
                        name="letterhead"
                        render={({ field: { onChange, name, ref } }) => (
                          <Input
                            name={name}
                            ref={ref}
                            onChange={(e) => onChange(e.target?.files?.[0])}
                            type="file"
                            accept="image/*" // Adjust for your allowed file types
                            className="border p-2 rounded"
                          />
                        )}
                      />
                      {form.formState.errors.letterhead && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.letterhead.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    <div className="col-span-2">
                      <p className="text-sm mb-2">آدرس</p>
                      <Controller
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <Textarea
                            rows={6}
                            {...field}
                            className={
                              form.formState.errors.address && "border-red-400"
                            }
                          />
                        )}
                      />
                      {form.formState.errors.address && (
                        <Alert variant="destructive" className="py-2 mt-2">
                          <AlertDescription className="text-xs">
                            {form.formState.errors.address.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </div>

                  <Button variant={"primary"} className="mt-4 w-full">
                    ثبت شرکت
                  </Button>
                </form>
              </div>
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

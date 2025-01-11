"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm, FieldValues } from "react-hook-form";
import { emailRegex, mobileRegex } from "@/constants/regex";
import Timer from "@/components/ui/Timer";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { ApiResponse } from "@/types/apiResponse";
import ButtonLoading from "./ui/buttonLoading";

function LoginForm() {
  const [activeTab, setActiveTab] = useState<"mobile" | "email">("mobile");
  const [otp, setOtp] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // this will send phone number or email code to the auth/otp  endpoint
  const onSubmit = async (data: FieldValues) => {
    const formattedData = {
      username: data.username,
      type: "login",
    };

    const response = await fetch(`http://192.168.0.244:8000/api/v1/auth/otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include", // Include cookies
      body: JSON.stringify(formattedData),
    });

    const apiResponse: ApiResponse<null> = await response.json();

    if (apiResponse.success) {
      setOtp(true);
    }

    reset();
  };

  // this will send otp code to the verify-code  endpoint
  async function handleOtpChange(data: string) {
    console.log("this is otp value", data);
    const formattedData = {
      code: data,
      type: "login",
    };
    const response = await fetch(
      `http://192.168.0.244:8000/api/v1/auth/verify-code`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formattedData),
      }
    );
    const apiResponse = await response.json();
    console.log(apiResponse);
  }

  return (
    <div className="bg-[#F1F5F9] w-full min-h-dvh flex justify-center items-center">
      <div className="min-w-[500px] flex rounded border">
        <div className="w-full p-6 bg-white md:p-8 rounded-s flex flex-col rounded">
          {otp ? (
            <div>
              <p className={"text-center mx-auto mb-4"}>
                لطفا کد ۶ رقمی ارسال شده را وارد کنید
              </p>

              <InputOTP
                dir={"ltr"}
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                onComplete={handleOtpChange}
              >
                <InputOTPGroup className={"flex-row-reverse mx-auto"}>
                  <InputOTPSlot index={0} />
                  <InputOTPSeparator className={"opacity-0"} />
                  <InputOTPSlot index={1} />
                  <InputOTPSeparator className={"opacity-0"} />
                  <InputOTPSlot index={2} />
                  <InputOTPSeparator className={"opacity-0"} />
                  <InputOTPSlot index={3} />
                  <InputOTPSeparator className={"opacity-0"} />
                  <InputOTPSlot index={4} />
                  <InputOTPSeparator className={"opacity-0"} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>

              <Timer initialTime={120} />
              <div className={"flex justify-center"}>
                <a
                  href={"/login"}
                  className={
                    "text-center mt-7 text-slate-400  py-0.5 px-4 rounded cursor-pointer"
                  }
                >
                  ویرایش شماره تماس
                </a>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-semibold mb-3 text-center">
                خوش آمدید
              </h1>
              <p className="text-sm mb-6 text-center">
                سامانه اتوماسیون شرکت پردیس شگفت پارس جنوب
              </p>
              <Tabs
                defaultValue="mobile"
                onValueChange={(value) =>
                  setActiveTab(value as "mobile" | "email")
                }
              >
                <TabsList className="w-full mb-3">
                  <TabsTrigger value="mobile" className="w-1/2 h-full">
                    موبایل
                  </TabsTrigger>
                  <TabsTrigger value="email" className="w-1/2 h-full">
                    ایمیل
                  </TabsTrigger>
                </TabsList>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-2 mb-4">
                    <TabsContent value="mobile">
                      {activeTab === "mobile" && (
                        <Input
                          {...register("username", {
                            required: "شماره موبایل نباید خالی باشد",
                            pattern: {
                              value: mobileRegex,
                              message: "شماره موبایل معتبر نیست",
                            },
                          })}
                          placeholder="09123456789"
                          className="placeholder:text-gray-300"
                        />
                      )}
                      {activeTab === "mobile" && errors.username && (
                        <p className="text-red-400 text-start self-end">
                          {errors.username.message as string}
                        </p>
                      )}
                    </TabsContent>
                    <TabsContent value="email">
                      {activeTab === "email" && (
                        <Input
                          {...register("username", {
                            required: "ایمیل نباید خالی باشد",
                            pattern: {
                              value: emailRegex,
                              message: "ایمیل معتبر نیست",
                            },
                          })}
                          placeholder="email@example.com"
                          className="placeholder:text-gray-300"
                        />
                      )}
                      {activeTab === "email" && errors.username && (
                        <p className="text-red-400 text-start self-end">
                          {errors.username.message as string}
                        </p>
                      )}
                    </TabsContent>
                  </div>
                  <Button
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full mt-2"
                  >
                    {isSubmitting ? <ButtonLoading /> : "ارسال"}
                  </Button>
                </form>
              </Tabs>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

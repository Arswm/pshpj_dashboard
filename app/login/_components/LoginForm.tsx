'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { emailRegex, mobileRegex } from '@/constants/regex';
import { Button } from '@/components/ui/button';
import ButtonLoading from '@/components/ui/buttonLoading';
import { FieldValues } from 'react-hook-form';
import { ILoginSchema } from '@/app/login/_core/interfaces';
import { useForm } from 'react-hook-form';
import { PostOtp } from '../_core/requests';
import { toast } from 'sonner';

interface LoginFormProps {
  setOtp: (value: boolean) => void;
}

function LoginForm({ setOtp }: LoginFormProps) {
  const [activeTab, setActiveTab] = useState<'mobile' | 'email'>('mobile');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const formattedData: ILoginSchema = {
      username: data.username,
      type: 'login',
    };

    try {
      const response = await PostOtp(formattedData);
    
      if (!response || !response.success) {
        if (response?.errors) {
          Object.keys(response.errors).forEach((error) => {
            response!.errors![error].forEach((err: string) => {
              toast.error(err);
            });
          });
        }
        return; // Early return if there is no success
      }
    
      setOtp(true);
    } catch (error: unknown) {
      console.error(error);
    } finally {
      reset();
    }
    
  };

  return (
    <>
      <h1 className="text-3xl font-semibold mb-3 text-center">خوش آمدید</h1>
      <p className="text-sm mb-6 text-center">سامانه اتوماسیون شرکت پردیس شگفت پارس جنوب</p>
      <Tabs
        defaultValue="mobile"
        onValueChange={(value) => setActiveTab(value as 'mobile' | 'email')}
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
              {activeTab === 'mobile' && (
                <Input
                  {...register('username', {
                    required: 'شماره موبایل نباید خالی باشد',
                    pattern: {
                      value: mobileRegex,
                      message: 'شماره موبایل معتبر نیست',
                    },
                  })}
                  placeholder="09123456789"
                  className="placeholder:text-gray-300"
                />
              )}
              {activeTab === 'mobile' && errors.username && (
                <p className="text-red-400 text-start self-end">
                  {errors.username.message as string}
                </p>
              )}
            </TabsContent>
            <TabsContent value="email">
              {activeTab === 'email' && (
                <Input
                  {...register('username', {
                    required: 'ایمیل نباید خالی باشد',
                    pattern: {
                      value: emailRegex,
                      message: 'ایمیل معتبر نیست',
                    },
                  })}
                  placeholder="email@example.com"
                  className="placeholder:text-gray-300"
                />
              )}
              {activeTab === 'email' && errors.username && (
                <p className="text-red-400 text-start self-end">
                  {errors.username.message as string}
                </p>
              )}
            </TabsContent>
          </div>

          {/* {userError &&
            Object.keys(userError).map((key) =>
              userError[key].map((error, index) => (
                <p key={`${key}-${index}`} className="text-red-400 text-center">
                  {error}
                </p>
              )),
            )} */}

          <Button disabled={isSubmitting} variant="primary" className="w-full mt-2">
            {isSubmitting ? <ButtonLoading /> : 'ارسال'}
          </Button>
        </form>
      </Tabs>
    </>
  );
}

export default LoginForm;

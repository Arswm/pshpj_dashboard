'use client';
import React, { useState } from 'react';

import OtpForm from '@/app/login/_components/OtpForm';
import LoginForm from '@/app/login/_components/LoginForm';
import Link from 'next/link';

function LoginPage() {
  const [otp, setOtp] = useState<boolean>(false);

  return (
    <div className="bg-[#F1F5F9] w-full min-h-dvh flex justify-center items-center">
      <div className="min-w-[500px] flex rounded border">
        <div className="w-full p-6 bg-white md:p-8 rounded-s flex flex-col rounded">
          {otp ? <OtpForm /> : <LoginForm setOtp={setOtp} />}

          <p className={'text-xs mt-4'}>
            با ورود به اتوماسیون شما با{' '}
            <Link href="#" className={'underline'}>
              قوانین شرکت
            </Link>{' '}
            پردیس شگفت پارس جنوب موافقت کرده اید
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import Timer from '@/components/ui/Timer';
import { setTokenToCookie } from '@/actions/cookie';
import { useRouter } from 'next/navigation';
import { VerifyCodeAPI } from '../_core/requests';
import { toast } from 'sonner';

function OtpForm() {
  const router = useRouter();

  // this will send otp code to the verify-code  endpoint
  async function handleOtpChange(data: string) {
    const formattedData = {
      code: data,
      type: 'login',
    };

    try {
      const response = await VerifyCodeAPI(formattedData);

      if (!response?.success) {
        toast.error(response?.errors?.message?.[0]);
        return;
      }

      await setTokenToCookie(response?.data);
      router.push('/dashboard');
    } catch (e) {
      console.log('fetch failed error :', e);
    }
  }

  return (
    <div>
      <p className={'text-center mx-auto mb-4'}>لطفا کد ۶ رقمی ارسال شده را وارد کنید</p>

      <InputOTP
        dir={'ltr'}
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        onComplete={handleOtpChange}
      >
        <InputOTPGroup className={'flex-row-reverse mx-auto'}>
          <InputOTPSlot index={0} />
          <InputOTPSeparator className={'opacity-0'} />
          <InputOTPSlot index={1} />
          <InputOTPSeparator className={'opacity-0'} />
          <InputOTPSlot index={2} />
          <InputOTPSeparator className={'opacity-0'} />
          <InputOTPSlot index={3} />
          <InputOTPSeparator className={'opacity-0'} />
          <InputOTPSlot index={4} />
          <InputOTPSeparator className={'opacity-0'} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <Timer initialTime={120} />
    </div>
  );
}

export default OtpForm;

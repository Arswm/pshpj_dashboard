// /core/requests.ts

import {
  ILoginResponse,
  ILoginSchema,
  IVerfySchema,
  IVerifyResponse,
} from '@/app/login/_core/interfaces';

export async function PostOtp(data: ILoginSchema): Promise<ILoginResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/otp`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return  response.json()
  }

  return response.json();
}

export async function VerifyCodeAPI(data: IVerfySchema): Promise<IVerifyResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-code`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log('error on VerifyCodeAPI');
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

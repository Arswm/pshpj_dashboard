'use server';

import { cookies } from 'next/headers';

export async function setTokenToCookie(token: string) {
  try {
    (await cookies()).set({
      name: 'accessToken',
      value: token,
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
  } catch (error) {
    console.log(error);
  }
}

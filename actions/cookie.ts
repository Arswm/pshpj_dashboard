'use server';

import { cookies } from 'next/headers';

export async function setTokenToCookie(token: string) {
  try {
    (await cookies()).set({
      name: 'accessToken',
      value: token,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAccessTokenCookie() {
  try {
    const token = (await cookies()).get('accessToken');

    if (!token) return;

    return token.value;
  } catch (error) {
    console.log(error);
  }
}

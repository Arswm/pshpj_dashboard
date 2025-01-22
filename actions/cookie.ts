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

export async function getAccessTokenCookie() {
  try {
    // const token = (await cookies()).get('accessToken');
    const token = `0be32c34-d7f6-11ef-8aa3-dc4a3e6bdc23|8uv85dF8LRB4azTRQrFLgcdbxvRmSMzolPmKbKXk0bdc02ae`;
    if (!token) return;

    //return token.value;
    return token;
  } catch (error) {
    console.log(error);
  }
}

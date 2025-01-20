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
    const token = `9|qOOGGTUKX34lJzXqNHO4WCdXKBl39uV6KUvm6D5Kd505c3a1`;
    if (!token) return;

    //return token.value;
    return token;
  } catch (error) {
    console.log(error);
  }
}

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
    const token = `0c69d6be-d7cc-11ef-baf3-dc4a3e6bdc23|fPiygbQJ2mayvtLMQkK9T5NRO8zkYR5KzLlY5b5Gd6253cb5`;
    if (!token) return;

    //return token.value;
    return token;
  } catch (error) {
    console.log(error);
  }
}

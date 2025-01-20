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
    const token = '10|bXba5Tqynt5Yvmbr0nlR2KIYppXi9OFZJ483Asksc4d6dd80';
    if (!token) return;

    //return token.value;
    return token;
  } catch (error) {
    console.log(error);
  }
}

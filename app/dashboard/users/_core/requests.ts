import { getAccessTokenCookie } from '@/actions/cookie';
import { IGetUserResponse } from './interfaces';

export async function GetUsers(): Promise<IGetUserResponse | undefined> {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/users`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('error in GetCompany Fetch');
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error, 'failed to fetch GetUser');
  }
}

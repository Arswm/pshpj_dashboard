import { getAccessTokenCookie } from '@/actions/cookie';
import { IGetUserRolesRepsonse, IPosTUserRolesRepsonse } from './interfaces';

export async function GetUserRoles(): Promise<IGetUserRolesRepsonse | undefined> {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/list/roles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('error in GetPermission Fetch');
    }
 
    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

export async function PostUser({ data }: { data: FormData}): Promise<IPosTUserRolesRepsonse | undefined> {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: data
    });

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}
import { getAccessTokenCookie } from '@/actions/cookie';
import { IGetPermissionResponse, IGetRolesResponse, IRegisterRole } from './interfaces';

export async function GetPermission(): Promise<IGetPermissionResponse> {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/permissions`, {
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

export async function GetRoles(): Promise<IGetRolesResponse> {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/roles`, {
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

export async function PostRole({
  payload,
}: {
  payload: IRegisterRole;
}): Promise<IGetRolesResponse> {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/roles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(payload), // Convert payload to a JSON string
    });

    if (!response.ok) {
      throw new Error('error in RegisterRole Fetch');
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

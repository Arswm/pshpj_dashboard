import { getAccessTokenCookie } from '@/actions/cookie';
import type { IDynamicListResponse, IGetCompanyProps, IPostBrandResponse } from './interfaces';

export async function PostCompanyAPI({ data }: { data: FormData }) {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/companies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error('failed to post compaany!');
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

export async function PostBrandAPI({ data }: { data: FormData }): Promise<IPostBrandResponse> {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/brands`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: data,
    });

    // if (!response.ok) {
    //   throw new Error('failed to post brand!');
    // }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

export async function GetCompanies(props: IGetCompanyProps) {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/panel/companies?page=${props.currentPage}&search=${props.search}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error('error in GetCompany Fetch');
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

export async function GetBrands(props: IGetCompanyProps) {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/panel/brands?page=${props.currentPage}&search=${props.search}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error('error in GetCompany Fetch');
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

export async function GetDynamicList(): Promise<IDynamicListResponse> {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/list/companies`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('error in GetDynamicList Fetch');
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

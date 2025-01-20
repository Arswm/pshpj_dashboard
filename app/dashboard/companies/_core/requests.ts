import { getAccessTokenCookie } from '@/actions/cookie';
import { IGetCompanyProps } from './interfaces';

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

export async function GetCompanies(props: IGetCompanyProps) {
  const accessToken = await getAccessTokenCookie();
  try {
    const response = await fetch(
      `http://192.168.0.244:8000/api/v1/panel/companies?page=${props.currentPage}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      console.log('error in GetCompany Fetch');
    }

    return await response.json();
  } catch (error: unknown) {
    console.log(error);
  }
}

import { getAccessTokenCookie } from '@/actions/cookie';

export async function PostCompanyAPI({ data }: { data: FormData }) {
  const accessToken = await getAccessTokenCookie();

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/panel/companies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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

import { ApiResponse } from '@/types/apiResponse';
import { FormSchema } from './interfaces';

export async function PostBlogAPI(data: FormSchema): Promise<ApiResponse<FormSchema> | undefined> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/add`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log('network problems...');
  }

  return await response.json();
}

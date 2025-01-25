import React from 'react';
import { GetFullCompanyDetail } from '../_core/requests';
import { toast } from 'sonner';

interface SingleCompanyPageProps {
  params: { id: string };
}

export default async function page({ params }: SingleCompanyPageProps) {

    let data = {}
  const { id } = await params;
  try {
    const response = await GetFullCompanyDetail(id);

    if(!response.success){
        toast(response.message)
    }

    console.log(response)
    data = response.data

  } catch (error: unknown) {
    console.log(error);
  }
  return <div className="bg-white rounded-lg shadow p-4">company is : {data?.company_name}</div>;
}

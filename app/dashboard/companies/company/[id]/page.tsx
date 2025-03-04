import React from 'react';
import { GetFullCompanyDetail } from '../../_core/requests';
import { toast } from 'sonner';
import { IGetCompany } from '../../_core/interfaces';

interface SingleCompanyPageProps {
  params: { id: string };
}

export default async function page({ params }: SingleCompanyPageProps) {
  let data: IGetCompany | undefined;
  const { id } = await params;
  try {
    const response = await GetFullCompanyDetail(id);

    if (!response.success) {
      toast(response.message);
    }

    data = response.data;
    console.log(data);
  } catch (error: unknown) {
    console.log(error);
  }
  return <div className="bg-white rounded-lg shadow p-4">company is : {data?.company_name}</div>;
}

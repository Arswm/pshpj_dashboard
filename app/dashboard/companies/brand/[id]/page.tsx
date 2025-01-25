import { toast } from 'sonner';
import { GetFullBrandDetail } from '../../_core/requests';

interface SingleCompanyPageProps {
  params: { id: string };
}

export default async function page({ params }: SingleCompanyPageProps) {
  const { id } = params;

  console.log(id);

  let brand;

  try {
    const response = await GetFullBrandDetail(id);

    if (response && response?.success) {
      brand = response.data;
    }
  } catch (error) {
    console.log(error);
  }

  return <div className="bg-white rounded-lg shadow p-4">Brand Name is : {brand?.name}</div>;
}

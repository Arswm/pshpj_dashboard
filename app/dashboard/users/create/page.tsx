import Image from 'next/image';

import EmptyImage from '@/public/images/not-founds/CompanyNotFound.png';
import { toast } from 'sonner';
import { GetUserRoles } from './_core/requests';
import CreateUserForm from './_components/CreateUser';

export default async function UserPage() {
  async function getRoles() {
    try {
      const response = await GetUserRoles();

      if (!response?.success || !response.data) {
        toast.error(response?.message?.[0]);
        return [];
      }

      return response.data;
    } catch (error: unknown) {
      console.log(error);
    }
  }

  const roles = await getRoles();

  return (
    <div>
      {roles ? (
        <CreateUserForm roles={roles} />
      ) : (
        <div className="bg-white shadow rounded-lg p-6 flex justify-center items-center flex-col gap-14 text-gray-600">
          <Image src={EmptyImage} width={600} height={600} alt={'not found'} title={'not found'} />
          <p>مشکلی در پیش ثبت کاربر آمده است</p>
        </div>
      )}
    </div>
  );
}

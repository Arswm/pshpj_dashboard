import { Unplug } from 'lucide-react';
import RegisterRole from './_components/RegisterRole';
import { GetPermission, GetRoles } from './_core/requests';

export default async function RolesPage() {
  const roles = await GetRoles();
  const permissions = await GetPermission();

  return (
    <div className="flex gap-2">
      {permissions && permissions.data && roles && roles.data ? (
        <RegisterRole permissions={permissions.data} roles={roles} />
      ) : (
        <div className="w-8/12 h-full flex flex-col gap-4 justify-center items-center bg-white shadow rounded p-8">
          <Unplug />

          <span className="text-sm">خطایی در دریافت دسترسی ها پیش آمده !</span>
        </div>
      )}
    </div>
  );
}

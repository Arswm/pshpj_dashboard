import { Unplug } from 'lucide-react';
import RegisterRole from './_components/RegisterRole';
import ShowRoles from './_components/ShowRoles';
import { GetPermission, GetRoles } from './_core/requests';

export default async function RolesPage() {
  const roles = await GetRoles();
  const permissions = await GetPermission();

  return (
    <div className="flex gap-2">
      {permissions && permissions.data ? (
        <RegisterRole permissions={permissions.data} />
      ) : (
        <div className="w-8/12 h-full flex flex-col gap-4 justify-center items-center bg-white shadow rounded p-8">
          <Unplug />

          <span className="text-sm">خطایی در دریافت دسترسی ها پیش آمده !</span>
        </div>
      )}

      {roles && roles.data ? (
        <ShowRoles roles={roles.data} />
      ) : (
        <div
          className={`w-4/12 h-full flex flex-col gap-4 justify-center items-center bg-white shadow rounded p-8`}
        >
          <Unplug />

          <span className="text-sm">خطایی در دریافت نقش ها پیش آمده !</span>
        </div>
      )}
    </div>
  );
}

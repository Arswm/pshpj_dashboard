import RegisterRole from './_components/RegisterRole';
import ShowRoles from './_components/ShowRoles';
import { GetPermission, GetRoles } from './_core/requests';

export default async function RolesPage() {
  const roles = await GetRoles();
  const permissions = await GetPermission();

  return (
    <div className="flex gap-2">
      <RegisterRole permissions={permissions?.data || []} />
      <ShowRoles roles={roles?.data || []} />
    </div>
  );
}

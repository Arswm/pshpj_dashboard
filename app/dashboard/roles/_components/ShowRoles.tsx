'use client';

import { FaUserShield } from 'react-icons/fa';
import { IGetRole } from '../_core/interfaces';
import { Button } from '@/components/ui/button';
import { useRoleStore } from '@/store/RolesStore';

interface IProps {
  roles: IGetRole[];
}

const ShowRoles = ({ roles }: IProps) => {
  // const setRoleState = useRoleStore((state) => state);
  const handleRoleEdit = (role: IGetRole) => {
    useRoleStore.setState({ id: role.id, name: role.name, permissions: role.permissions });
  };

  return (
    <div className="bg-white shadow p-4 rounded-lg overflow-y-scroll w-full h-full max-h-[1200px]">
      {roles.map((role) => (
        <div
          key={role.id}
          className={`mb-4 flex flex-col gap-5 rounded border p-4 dark:border-form-strokedark`}
        >
          <div className={`flex gap-2`}>
            <div className={`flex w-full gap-4`}>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-slate-600`}
              >
                <FaUserShield />
              </div>

              <div className={`grow`}>
                <div className={`mb-1`}>{`نقش : ${role.name}`}</div>
              </div>
            </div>
          </div>

          <Button
            type="button"
            onClick={() => handleRoleEdit(role)}
            className={`mb-4 w-full rounded bg-gray-200 px-4 py-2.5 text-slate-600 transition-all hover:border-transparent hover:bg-primary hover:text-white dark:bg-slate-500 dark:text-gray-2 dark:hover:bg-primary sm:mb-0 sm:w-auto`}
          >
            ویرایش اطلاعات
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ShowRoles;

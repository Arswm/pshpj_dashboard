'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { IGetPermission } from '../_core/interfaces';

import { Plus } from 'lucide-react';
import { FieldValues, useForm } from 'react-hook-form';
import PermissionSkelton from './PermissionSkelton';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function RegisterRole({
  permissions,
}: {
  permissions: { [key: string]: IGetPermission[] };
}) {
  // const permission_keys = Object.keys(permissions);

  console.log(Object.entries(permissions));
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form className="outline-none border-none w-8/12" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 items-stretch justify-stretch w-full">
          <Input
            type="text"
            placeholder="نام نقش را وارد کنید"
            className="w-fit min-w-80 h-14"
            {...register('name')}
          />
          <Button variant={'primary'} className="h-14" type="submit">
            <Plus className="text-white" />
            افزودن نقش
          </Button>
        </div>

        <div className="mt-14 w-full">
          <p className="mb-4 text-lg font-mediumbold">دسترسی ها</p>
          <div className="">
            <div className="flex gap-4 justify-between items-start ">
              {permissions ? (
                <div className=" shadow rounded-lg bg-white w-full gap-4 p-6">
                  {/* {permission_keys.map((permission_key, index) => (
                    <div className="mb-6" key={index}>
                      <p className="my-2 font-medium text-xl">{permission_key} :</p>
                      <div className="grid grid-cols-4">
                        {permissions[permission_key].map(
                          (permission_key_content: IGetPermission, index: number) => (
                            <Label
                              key={permission_key_content.key}
                              className="cursor-pointer inline-flex gap-2 items-center"
                            >
                              <Checkbox
                                className="size-5"
                                {...register(`permissions.${index}`)}
                                value={permission_key_content.key}
                              />
                              <span className="self-end text-xs">
                                {permission_key_content.value}
                              </span>
                            </Label>
                          ),
                        )}
                      </div>
                    </div>
                  ))} */}
                  {/* Render Permissions */}

                  {Object.entries(permissions).map(([permissionKey, permissionList]) => (
                    <div className="mb-6" key={permissionKey}>
                      <p className="my-2 font-medium text-xl">{permissionKey}:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {permissionList.map((permission) => (
                          <Label
                            key={permission.key}
                            className="cursor-pointer inline-flex gap-2 items-center"
                          >
                            <Checkbox
                              className="size-5"
                              {...register(`permissions.${permission.key}`)}
                              value={permission.key}
                            />
                            <span className="self-end text-xs">{permission.value}</span>
                          </Label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-fit w-full bg-white flex justify-center items-center p-5 rounded-lg shadow">
                  <PermissionSkelton />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

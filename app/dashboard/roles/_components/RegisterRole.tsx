'use client';

import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { IGetPermission } from '../_core/interfaces';

import { Plus } from 'lucide-react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function RegisterRole({
  permissions,
}: {
  permissions: { [key: string]: IGetPermission[] } | [];
}) {

  const [updated_permissions, set_updated_permissions] = useState<IGetPermission[]>([]);

  if (!permissions || !permissions.length) {
    toast.error('خطایی در دریافت دسترسی ها به وجود آمده', {
      action: {
        label: 'باشه',
        onClick: () => console.log('باشه'),
      },
    });
  }

  useEffect(() => {
    // Combine all permissions into a single array
    const allPermissions: IGetPermission[] = Object.values(permissions).flat();

    set_updated_permissions(allPermissions);
  }, [permissions]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);

    console.log('permissions => ', permissions);
    console.log('updated_permissions => ', updated_permissions);
  };

  return (
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
            <div className="grid grid-cols-4 gap-4 bg-white shadow p-4 rounded-lg w-full">
              {updated_permissions?.length ? (
                updated_permissions.map((permission, index) => (
                  <Label
                    key={permission.key}
                    className="cursor-pointer inline-flex gap-2 items-center"
                  >
                    <Checkbox
                      className="size-5"
                      {...register('permissions')}
                      name={`permission.${index}`}
                      value={permission.key}
                    />
                    <span className="self-end text-xs">{permission.value}</span>
                  </Label>
                ))
              ) : (
                <span>موردی یافت نشد!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

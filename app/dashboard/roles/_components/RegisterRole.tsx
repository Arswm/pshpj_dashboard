'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { IGetPermission, IRegisterRole } from '../_core/interfaces';

import { Plus } from 'lucide-react';
import { FieldValues, useForm } from 'react-hook-form';
import PermissionSkelton from './PermissionSkelton';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { PostRole } from '../_core/requests';
import { toast } from 'sonner';

export default function RegisterRole({
  permissions,
}: {
  permissions: { [key: string]: IGetPermission[] };
}) {
  const permission_keys = Object.keys(permissions);

  const checkedList: string[] = [];

  const handleCheckBox = (e: CheckedState, value: string) => {
    if (e === true && value) {
      checkedList.push(value);
    } else if (e === false && value && checkedList.includes(value)) {
      const index = checkedList.indexOf(value);
      checkedList.splice(index, 1);
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: FieldValues) => {
    const payload: IRegisterRole = { name: data.name, permissions: checkedList };

    const response = await PostRole({ payload });

    if (!response) {
      return;
    }

    if (response.success) {
      toast.success('نقش با موفقیت افزوده شد');
    }
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
                  {permission_keys.map((permission_title) => (
                    <>
                      <details
                        key={permission_title}
                        className="border mb-4 p-2 rounded-lg cursor-pointer select-none marker:m-0 relative marker:content-['']"
                      >
                        <summary className="flex justify-between items-center">
                          {permission_title}
                          <Plus size={16} />
                        </summary>
                        <div className="grid grid-cols-4 mt-4 mb-2">
                          {permissions[permission_title].map((permission_child) => (
                            <Label
                              key={permission_child.key}
                              className="cursor-pointer inline-flex gap-2 items-center"
                            >
                              <Checkbox
                                className="size-5"
                                value={permission_child.key}
                                onCheckedChange={(e) => handleCheckBox(e, permission_child.key)}
                              />
                              <span className="self-end text-xs">{permission_child.value}</span>
                            </Label>
                          ))}
                        </div>
                      </details>
                    </>
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

'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { IGetPermission, IGetRolesResponse, IRegisterRole } from '../_core/interfaces';

import { Plus, Unplug } from 'lucide-react';
import { FieldValues, useForm } from 'react-hook-form';
import PermissionSkelton from './PermissionSkelton';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { PostRole, UpdateRole } from '../_core/requests';
import { toast } from 'sonner';
import ShowRoles from './ShowRoles';
import { useRoleStore } from '@/store/RolesStore';
import { useEffect, useState } from 'react';

interface IProps {
  permissions: { [key: string]: IGetPermission[] };
  roles: IGetRolesResponse;
}

export default function RegisterRole({ permissions, roles }: IProps) {
  const allRoles = roles?.data?.map((role) => role.name);
  // permission[keys]
  const permission_keys = Object.keys(permissions);
  //zustand
  const { id, name, permissions: permission_list } = useRoleStore();
  // array of checked permissions
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleCheckBox = (e: CheckedState, value: string) => {
    if (e === true && value) {
      setCheckedList([...checkedList, value]);
    } else if (e === false && value && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item: string) => item !== value));
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FieldValues) => {
    const payload: IRegisterRole = { name: data.name, permissions: checkedList };

    if (allRoles && allRoles.includes(data.name)) {
      const existedName = roles?.data?.find((role) => role.name === data.name);
      if (existedName) {
        if (id !== existedName.id) {
          toast.error('نقشی با این نام قبلا ایجاد شده است');
          return;
        }
      }
    }

    if (checkedList.length === 0) {
      toast.error('حداقل یک دسترسی باید انتخاب شود');
      return;
    }

    if (id === '') {
      const response = await PostRole({ payload });
      if (!response) {
        return;
      }

      if (!response.success) {
        toast.error('خطایی در افزودن نقش پیش آمده');
        return;
      }

      toast.success('نقش با موفقیت افزوده شد');
    } else {
      const response = await UpdateRole({ payload, id });
      if (!response) {
        return;
      }

      if (!response.success) {
        toast.error('خطایی در به روز رسانی نقش پیش آمده');
        return;
      }

      toast.success('نقش با موفقیت به روز رسانی شد');
    }

    useRoleStore.setState({ id: '', name: '', permissions: [] });
    console.log(checkedList);
    reset();
  };

  const selectAllChilds = (e: CheckedState, childs: IGetPermission[]) => {
    const childKeys = childs.map((item) => item.key);

    if (e) {
      // Add all child permissions if not already present
      setCheckedList([...new Set([...checkedList, ...childKeys])]);
    } else {
      // Remove all child permissions
      setCheckedList(checkedList.filter((item: string) => !childKeys.includes(item)));
    }
  };

  useEffect(() => {
    if (id === '') {
      setCheckedList([]);
      console.log(id);
      return;
    } else {
      setValue('name', name);
      setValue('permissions', permission_list);
      setCheckedList(permission_list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, name, permission_list]);

  return (
    <>
      <form className="outline-none border-none w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-fit">
          <div className="flex gap-2 items-stretch justify-stretch">
            <Input
              type="text"
              placeholder="نام نقش را وارد کنید"
              className="w-fit min-w-80 h-14"
              {...register('name', {
                required: {
                  value: true,
                  message: 'نام نقش الزامی است',
                },
              })}
            />
            <Button variant={'primary'} className="h-14" type="submit">
              <Plus className="text-white" />
              افزودن نقش
            </Button>
          </div>
          <div className="hidden">{errors.name && toast.error(errors.name.message as string)}</div>
        </div>
        <div className="flex w-full">
          <div className="mt-14 w-full">
            <p className="mb-4 text-lg font-mediumbold">دسترسی ها</p>
            <div className=" flex gap-4">
              <div className="flex gap-4 justify-between items-start w-8/12">
                {permissions ? (
                  <div className=" shadow rounded-lg bg-white gap-4 p-6 w-full grow h-full">
                    {permission_keys.map((permission_title) => (
                      <details
                        open={permissions[permission_title].some((permission) =>
                          checkedList.includes(permission.key),
                        )}
                        key={permission_title}
                        className="border mb-4 p-2 rounded-lg cursor-pointer select-none marker:m-0 relative marker:content-[''] py-4"
                      >
                        <summary className="flex justify-between items-center">
                          <Label className="flex items-center gap-2 justify-start">
                            <Checkbox
                              className="size-5"
                              onCheckedChange={(e) =>
                                selectAllChilds(e, permissions[permission_title])
                              }
                              checked={permissions[permission_title].every((permission) =>
                                checkedList.includes(permission.key),
                              )}
                            />
                            {permission_title}
                          </Label>
                          <Plus size={16} />
                        </summary>
                        <div className="grid grid-cols-4 mt-6 mb-2">
                          {permissions[permission_title].map((permission_child) => (
                            <Label
                              key={permission_child.key}
                              className="cursor-pointer inline-flex gap-2 items-center"
                            >
                              <Checkbox
                                className="size-5"
                                value={permission_child.key}
                                onCheckedChange={(e) => handleCheckBox(e, permission_child.key)}
                                checked={checkedList.includes(permission_child.key)}
                                {...register('permissions')}
                              />

                              <span className="self-end text-xs">{permission_child.value}</span>
                            </Label>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                ) : (
                  <div className="h-fit w-full bg-white flex justify-center items-center p-5 rounded-lg shadow">
                    <PermissionSkelton />
                  </div>
                )}
              </div>

              <div className="w-4/12 grow">
                {roles && roles.data ? (
                  <ShowRoles roles={roles.data} />
                ) : (
                  <div className="w-4/12 h-full flex flex-col gap-4 justify-center items-center bg-white shadow rounded p-8">
                    <Unplug />
                    <span className="text-sm">خطایی در دریافت نقش ها پیش آمده !</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

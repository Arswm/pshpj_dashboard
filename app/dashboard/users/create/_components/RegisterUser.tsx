'use client';

import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import TextInput from '@/components/shared/TextInput';
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TypeOf, z } from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DatabaseBackup, Plus, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import FileInput from '@/components/shared/FileInput';
import { IGetUserRoles } from '../_core/interfaces';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { PostUser } from '../_core/requests';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf', 'application/docx'];

export type IUserSchema = TypeOf<typeof schema>;

const fileValidation = z
  .any()
  .refine((files: File[]) => {
    if (files && files[0]) {
      return files[0]?.size <= MAX_FILE_SIZE;
    } else {
      return true;
    }
  }, 'نباید بیشتر از 5 مگابایت باشد')
  .refine((files: File[]) => {
    if (files && files[0]) {
      return ALLOWED_TYPES.includes(files[0]?.type);
    } else {
      return true;
    }
  }, 'تایپ های مورد قبول jpg , jpeg , png , pdf , docx');

const schema = z.object({
  first_name: z.string().trim().nullish(),
  last_name: z.string().trim().nullish(),
  gender: z.string().trim().nullish(),
  birthday: z.string().trim().nullish(),
  phone: z.string().trim().nullish(),
  national_id: z.string().trim().nullish(),
  email: z.string().trim().nullish(),
  salary: z.string().trim().nullish(),
  role: z.string().trim().nullish(),
  cooperative_type: z.string().trim().nullish(),
  job_title: z.string().trim().nullish(),
  insurance: z.string().nullish(),
  agreement_start_date: z.string().trim().nullish(),
  agreement_end_date: z.string().trim().nullish(),
  address: z.string().trim().nullish(),
  related_number: z.array(
    z.object({ name: z.string().trim().nullish(), phone: z.string().trim().nullish() }),
  ),
  profile: fileValidation,
  national_card: fileValidation,
  birth_certificate: fileValidation,
  agreement: fileValidation,
});

const reverseDate = (dateStr: string) => {
  const [month, day, year] = dateStr.split('/');
  return `${year}/${month.padStart(2, '0')}/${day.padStart(2, '0')}`;
};

interface IProps {
  roles: IGetUserRoles[];
}

export default function RegisterUserForm({ roles }: IProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IUserSchema>({
    resolver: zodResolver(schema),
    defaultValues: { related_number: [{ name: '', phone: '' }] },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'related_number',
  });

  const onSubmit = async (data: IUserSchema) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const value = data[key as keyof IUserSchema];
      if (typeof value === 'string') {
        if (value.length > 0) {
          formData.append(key, value);
        }
      } else if (value instanceof FileList && value.length > 0) {
        formData.append(key, value[0]);
      }
    });

    try {
      const response = await PostUser({ data: formData });

      if (!response) {
        toast.error('خطا در ثبت کاربر !');
        return;
      }

      if (!response.success) {
        toast.error('مشکلی پیش آمده');
        return;
      }

      toast.success('کاربر با موفقیت ثبت شد');
      reset();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow rounded-lg p-4 text-gray-600"
    >
      <div className="grid grid-cols-4 gap-4">
        <TextInput name="first_name" label="نام" register={register} error={errors.first_name} />

        <TextInput
          name="last_name"
          label="نام خانوادگی"
          register={register}
          error={errors.last_name}
        />

        <div className="w-full">
          <Label>جنسیت</Label>
          <Select
            onValueChange={(e) => {
              setValue('gender', e);
            }}
          >
            <SelectTrigger className="h-11 focus:ring-0 rounded border-gray-200">
              <SelectValue placeholder="مرد" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">مرد</SelectItem>
              <SelectItem value="1">زن</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-full justify-end translate-y-0.5">
          <Label className="mb-1">تاریخ تولد</Label>
          <DatePicker
            onChange={(date) =>
              setValue('birthday', reverseDate(date?.toDate().toLocaleDateString() || ''))
            }
            locale={persian_fa}
            calendar={persian}
            maxDate={new Date()}
            calendarPosition="right"
            render={(value, openCalender) => (
              <div className="relative">
                <Input
                  readOnly
                  value={value}
                  onClick={() => openCalender()}
                  className="text-right bg-transparent border-gray-200 placeholder:text-gray-200 h-11"
                  placeholder="تاریخ تولد"
                />

                <div
                  className="absolute top-0 translate-y-1/2 left-2"
                  onClick={() => openCalender()}
                >
                  <DatabaseBackup className="size-5" />
                </div>
              </div>
            )}
          />
        </div>

        <TextInput name="phone" label="شماره موبایل" register={register} error={errors.phone} />

        <TextInput
          className="grow"
          name="national_id"
          label="کد ملی"
          register={register}
          error={errors.national_id}
        />

        {/* /// ta inja dorost shode az payinn */}

        <TextInput name="email" label="ایمیل" register={register} error={errors.email} />

        <TextInput name="salary" label="مبلغ حقوق" register={register} error={errors.salary} />

        <div className="w-full">
          <Label>انتخاب نقش</Label>
          <Select
            defaultValue={
              roles.find((role) => role.name === 'employee' || role.name === 'کارمند')?.id
            }
            onValueChange={(e) => {
              setValue('role', e);
            }}
          >
            <SelectTrigger className="h-11 focus:ring-0 rounded border-gray-200">
              <SelectValue placeholder="نقش" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role.id} value={role.id}>
                  {role.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Label>نوع همکاری</Label>
          <Select
            defaultValue="onSite"
            onValueChange={(e) => {
              setValue('cooperative_type', e);
            }}
          >
            <SelectTrigger className="h-11 focus:ring-0 rounded border-gray-200">
              <SelectValue placeholder="حضوری" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="onSite">حضوری</SelectItem>
              <SelectItem value="remote">غیرحضوری</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2">
          <TextInput
            name="job_title"
            label="عنوان شغلی"
            register={register}
            error={errors.job_title}
          />
        </div>

        <div className="w-full col-span-2">
          <Label>وضعیت بیمه</Label>
          <Select
            defaultValue="1"
            onValueChange={(e) => {
              setValue('insurance', e);
            }}
          >
            <SelectTrigger className="h-11 focus:ring-0 rounded border-gray-200">
              <SelectValue placeholder="دارد" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">دارد</SelectItem>
              <SelectItem value="0">ندارد</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-full justify-end translate-y-0.5">
          <Label className="mb-1">تاریخ شروع قرارداد</Label>
          <DatePicker
            onChange={(date) =>
              setValue(
                'agreement_start_date',
                reverseDate(date?.toDate().toLocaleDateString() || ''),
              )
            }
            locale={persian_fa}
            calendar={persian}
            calendarPosition="bottom"
            render={(value, openCalender) => (
              <div className="relative">
                <Input
                  readOnly
                  value={value}
                  onClick={() => openCalender()}
                  className="text-right bg-transparent border-gray-200 placeholder:text-gray-200 h-11"
                  placeholder="تاریخ شروع قرارداد"
                />

                <div
                  className="absolute top-0 translate-y-1/2 left-2"
                  onClick={() => openCalender()}
                >
                  <DatabaseBackup className="size-5" />
                </div>
              </div>
            )}
          />
        </div>

        <div className="flex flex-col w-full justify-end translate-y-0.5">
          <Label className="mb-1">تاریخ پایان قرارداد</Label>
          <DatePicker
            onChange={(date) =>
              setValue('agreement_end_date', reverseDate(date?.toDate().toLocaleDateString() || ''))
            }
            locale={persian_fa}
            calendar={persian}
            calendarPosition="bottom"
            render={(value, openCalender) => (
              <div className="relative">
                <Input
                  readOnly
                  value={value}
                  onClick={() => openCalender()}
                  className="text-right bg-transparent border-gray-200 placeholder:text-gray-200 h-11"
                  placeholder="تاریخ پایان قرارداد"
                />

                <div
                  className="absolute top-0 translate-y-1/2 left-2"
                  onClick={() => openCalender()}
                >
                  <DatabaseBackup className="size-5" />
                </div>
              </div>
            )}
          />
        </div>

        {/* dynamic form  */}

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-4 col-span-2">
            <div className={`flex flex-col gap-2 grow pt-0.5`}>
              <Label>نام بستگان</Label>
              <input
                type="text"
                {...register(`related_number.${index}.name`)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-11 shadow-sm"
              />
              {errors.related_number?.[index]?.name && (
                <Alert variant={'destructive'} className="py-2.5 px-2">
                  <AlertDescription className="text-xs py-0 px-0">
                    {errors.related_number[index].name.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <div className="flex flex-col gap-2 grow">
              <div className="flex gap-2">
                <div className="w-full">
                  <Label>شماره </Label>
                  <input
                    type="text"
                    {...register(`related_number.${index}.phone`)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary h-11 shadow-sm"
                  />
                </div>
                {index < 1 && (
                  <div className="flex flex-col gap-2">
                    <span className="h-[14px] bg-transparent w-[14px] block"></span>
                    <button
                      type="button"
                      onClick={() => append({ name: '', phone: '' })}
                      className="bg-primary text-white px-4 py-2 rounded size-11 inline-flex justify-center items-center"
                    >
                      <Plus />
                    </button>
                  </div>
                )}
              </div>
              {errors.related_number?.[index]?.phone && (
                <Alert variant={'destructive'} className="py-2.5 px-2">
                  <AlertDescription className="text-xs">
                    {errors.related_number[index].phone.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
            {index > 0 && (
              <div className="flex flex-col gap-2">
                <span className="h-[14px] bg-transparent w-[14px] block"></span>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded size-[42px] inline-flex justify-center items-center"
                >
                  <X />
                </button>
              </div>
            )}
          </div>
        ))}

        <div className="col-span-2">
          <TextInput
            className="rounded-md"
            name="address"
            label="آدرس"
            register={register}
            error={errors.address}
          />
        </div>

        <div className="col-span-2">
          <FileInput
            label="تصویر کارمند"
            accept="file"
            name="profile"
            required
            className="cursor-pointer"
            register={register}
            error={errors.profile}
          />
        </div>

        <div className="col-span-2">
          <FileInput
            label="تصویر کارت ملی"
            accept="file"
            name="national_card"
            required
            className="cursor-pointer"
            register={register}
            error={errors.national_card}
          />
        </div>

        <div className="col-span-2">
          <FileInput
            label="تصویر شناسنامه"
            accept="file"
            name="birth_certificate"
            required
            className="cursor-pointer"
            register={register}
            error={errors.birth_certificate}
          />
        </div>

        <div className="col-span-2">
          <FileInput
            label="فایل قرارداد"
            accept="file"
            name="agreement"
            required
            className="cursor-pointer"
            register={register}
            error={errors.agreement}
          />
        </div>
      </div>

      <div></div>

      <div className="flex justify-end mt-6">
        <Button variant={'primary'}>ثبت کارمند</Button>
      </div>
    </form>
  );
}

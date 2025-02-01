'use client';
import FileInput from '@/components/shared/FileInput';
import TextAreaInput from '@/components/shared/TexrAreaInput';
import TextInput from '@/components/shared/TextInput';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm, UseFormRegister } from 'react-hook-form';
import { ICompaniesDynamicList, IPostBrandSchema } from '../_core/interfaces';
import { PostBrandAPI } from '../_core/requests';
import { toast } from 'sonner';
import ButtonLoading from '@/components/ui/buttonLoading';
export default function RegisterBrandForm({ companies }: { companies: ICompaniesDynamicList[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<IPostBrandSchema>();

  const onSubmit = async (data: IPostBrandSchema) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        const value = data[key as keyof IPostBrandSchema];
        if (typeof value === 'string' && value.length > 0) {
          formData.append(key, value);
        } else if (value instanceof FileList && value.length > 0) {
          formData.append(key, value[0]);
        }
      });

      const response = await PostBrandAPI({ data: formData });

      if (!response) {
        toast.error('some shit happened');
        return;
      }

      if (response.errors) {
        const allErrors: string[] = [];

        Object.keys(response.errors).forEach((field) => {
          const errorMessages = response?.errors?.[field]?.join(', ') || 'خطای نامشخص';
          allErrors.push(`${errorMessages}`);
        });

        allErrors.forEach((error, index) => {
          setTimeout(() => {
            toast.error(error || 'خطای نامشخص!');
          }, index * 200);
        });
        return;
      }

      if (response.success) {
        toast.success(response.message || 'ثبت برند موفقیت آمیز بود');
        reset();
        setValue('company_id', '');
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={'bg-white shadow rounded-lg w-full mt-6 p-4'}>
        {/* onSubmit={form.handleSubmit(onSubmit)} */}
        <form onSubmit={handleSubmit(onSubmit)} className={'w-full'}>
          <div className={'grid gap-4 grid-cols-2'}>
            {/*a select box with options from api comes here */}
            <div>
              <Label>انتخاب شرکت حقوقی</Label>
              <Select
                onValueChange={(e) => {
                  setValue('company_id', e);
                }}
                dir={'rtl'}
              >
                <SelectTrigger className="w-full h-11">
                  <SelectValue placeholder="انتخاب شرکت" />
                </SelectTrigger>
                <SelectContent>
                  {companies?.length ? (
                    companies.map((company) => (
                      <SelectItem key={company.id} value={company.id.toString()}>
                        {company.company_name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value={'موردی یافت نشد'}>موردی یافت نشد</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            <TextInput
              register={register}
              label="نام برند تجاری"
              error={errors.name}
              name="name"
              required
              rules={{
                required: {
                  value: true,
                  message: 'حداقل سه کارکتر وارد کنید',
                },
                minLength: {
                  value: 3,
                  message: 'حداقل سه کارکتر وارد کنید',
                },
              }}
            />

            <TextInput
              register={register}
              label="نامک"
              error={errors.en_name}
              name="en_name"
              required
              rules={{
                required: {
                  value: true,
                  message: 'حداقل سه کارکتر وارد کنید',
                },
                minLength: {
                  value: 3,
                  message: 'حداقل سه کارکتر وارد کنید',
                },
              }}
            />

            <TextInput
              register={register}
              label="آدرس سایت"
              error={errors.company_id}
              name="email"
            />

            <TextInput
              register={register}
              label="ایمیل اصلی"
              error={errors.email}
              name="email"
            />

            <TextInput
              register={register}
              label="شماره ثابت"
              error={errors.telephone}
              name="telephone"
            />

            <TextInput
              register={register}
              label="شماره موبایل"
              error={errors.phone}
              name="phone"
              required
              rules={{
                required: {
                  value: true,
                  message: 'فیلد شماره تماس احباری است',
                },
                minLength: {
                  value: 8,
                  message: 'حداقل ۸ عدد است',
                },
              }}
            />

            <TextInput
              register={register}
              label="شماره کارت"
              error={errors.card_number}
              name="card_number"
            />

            <TextInput
              register={register}
              label="نام صاحب حساب"
              error={errors.card_owner_name}
              name="card_owner_name"
            />

            <TextInput
              register={register}
              label="شماره شبا"
              error={errors.ir_sheba}
              name="ir_sheba"
            />

            <div className="col-span-2">
              <TextInput
                register={register}
                label="لینک درگاه پرداخت"
                error={errors.payment_link}
                name="payment_link"
              />
            </div>

            <div className="col-span-2">
              <FileInput
                register={register as UseFormRegister<IPostBrandSchema>}
                label="لوگو برند"
                error={errors.logo}
                name="logo"
                accept="image/*"
              />
            </div>

            <div className="col-span-2">
              <TextInput
                register={register}
                label="توکن دسترسی سایت"
                error={errors.access_token}
                name="access_token"
              />
            </div>

            <div className="col-span-2">
              <TextAreaInput
                register={register}
                label="آدرس"
                error={errors.address}
                name="address"
                rows={6}
              />
            </div>
          </div>

          <Button variant={'primary'} className="mt-4 w-full" disabled={isSubmitting}>
            {isSubmitting ? <ButtonLoading /> : 'ثبت شرکت'}
          </Button>
        </form>
      </div>
    </>
  );
}

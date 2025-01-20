'use client';
import FileInput from '@/components/shared/FileInput';
import TextAreaInput from '@/components/shared/TexrAreaInput';
import TextInput from '@/components/shared/TextInput';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { IPostCompanySchema } from '../_core/interfaces';
import { PostCompanyAPI } from '../_core/requests';
import { toast } from '@/hooks/use-toast';
import ButtonLoading from '@/components/ui/buttonLoading';

export default function RegisterCompanyForm() {
  // hooks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IPostCompanySchema>();

  const onSubmit = async (data: IPostCompanySchema) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const value = data[key as keyof IPostCompanySchema];
      if (typeof value === 'string') {
        if (value.length > 0) {
          formData.append(key, value);
        }
      } else if (value instanceof FileList && value.length > 0) {
        formData.append(key, value[0]);
      }
    });

    try {
      const response = await PostCompanyAPI({ data: formData });

      if (!response) {
        toast({
          variant: 'destructive',
          description: 'خطا در ایجاد شرکت!',
        });
        return;
      }

      toast({
        variant: 'default',
        description: 'شرکت با موفقیت ثبت شد!',
      });
      reset();
    } catch (error: unknown) {
      console.log(error);
    }
  };
  return (
    <div className={'p-2'}>
      {/* onSubmit={form.handleSubmit(onSubmit)} */}
      <form onSubmit={handleSubmit(onSubmit)} className={'w-full'}>
        <div className={'grid gap-4 grid-cols-2'}>
          <TextInput
            register={register}
            label="نام شرکت"
            error={errors.company_name?.message}
            name="company_name"
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
            label="مدیر عامل"
            error={errors.owner_name?.message}
            name="owner_name"
            required
            rules={{
              required: {
                value: true,
                message: 'نام مدیر عامل است',
              },
              minLength: {
                value: 2,
                message: 'حداقل دو کارکتر وارد کنید',
              },
            }}
          />

          <TextInput
            register={register}
            label="شناسه ملی"
            error={errors.national_number?.message}
            name="national_number"
            rules={{
              minLength: {
                value: 3,
                message: 'حداقل سه کارکتر وارد کنید',
              },
            }}
          />

          <TextInput
            register={register}
            label="شماره ثبت"
            error={errors.registration_number?.message}
            name="registration_number"
          />

          <TextInput
            register={register}
            label="کد اقتصادی"
            error={errors.economic_identifier?.message}
            name="economic_identifier"
          />

          <TextInput
            register={register}
            label="شماره تماس"
            error={errors.telephone_number?.message}
            name="telephone_number"
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
              // regex phone comes here
              //   pattern: {
              //     value : mobileRegex,
              //     message : 'یک شماره معتبر وارد کنید'
              //   }
            }}
          />

          <TextInput
            register={register}
            label="کد پستی"
            error={errors.postal_code?.message}
            name="postal_code"
          />

          <TextInput
            register={register}
            label="وبسایت"
            error={errors.website?.message}
            name="website"
          />

          <TextInput
            register={register}
            label="شماره شبا"
            error={errors.ir_sheba?.message}
            name="ir_sheba"
          />

          <TextInput
            register={register}
            label="صاحب حساب"
            error={errors.card_owner_name?.message}
            name="card_owner_name"
          />

          <TextInput
            register={register}
            label="شماره کارت"
            error={errors.card_number?.message}
            name="card_number"
          />

          <TextInput
            register={register}
            label="درصد مالیات"
            error={errors.tax?.message}
            name="tax"
          />

          <div className="col-span-2">
            <TextInput
              register={register}
              label="توکن دسترسی سایت"
              error={errors.access_token?.message}
              name="access_token"
            />
          </div>

          <FileInput
            register={register}
            label="امضای شرکت"
            error={errors.signature?.message}
            name="signature"
            accept="image/*"
          />

          <FileInput
            register={register}
            label="مهر شرکت"
            error={errors.seal?.message}
            name="seal"
            accept="image/*"
          />

          <FileInput
            register={register}
            label="لوگوی شرکت"
            error={errors.logo?.message}
            name="logo"
            accept="image/*"
          />

          <FileInput
            register={register}
            label="سربرگ شرکت"
            error={errors.letterhead?.message}
            name="letterhead"
            accept="image/*"
          />

          <div className="col-span-2">
            <TextAreaInput
              register={register}
              label="آدرس"
              error={errors.address?.message}
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
  );
}

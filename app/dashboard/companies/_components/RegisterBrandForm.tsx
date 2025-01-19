"use client";
import FileInput from "@/components/modules/FileInput";
import TextAreaInput from "@/components/modules/TexrAreaInput";
import TextInput from "@/components/modules/TextInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApiResponse } from "@/types/apiResponse";
import { apiFetch } from "@/utils/api";
import { useForm } from "react-hook-form";
import { CompaniesDynamicList, PostBrandSchema } from "../_core/interfaces";

export default function RegisterBrandForm({
  companiesDynamicList,
}: {
  companiesDynamicList: CompaniesDynamicList[];
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<PostBrandSchema>();

  const onSubmit = async (data: PostBrandSchema) => {
    console.log(data);
    const formData = new FormData();
    console.log(Object.entries(data));

    Object.keys(data).forEach((item) => {
      const key = item as keyof PostBrandSchema;

      if (typeof data[key] === "string") {
        data[key].length > 0 && formData.append(key, data[key]);
      } else {
        console.log(typeof data);
        const files = data as any;
        files[key].length > 0 && formData.append(item, files[key]?.[0]);
      }
    });

    try {
      const response = await apiFetch<ApiResponse<void>>("/panel/brands", {
        method: "POST",
        body: formData,
      });

      if (response.success) {
        reset();
        setValue("company_id", "");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"p-2"}>
      {/* onSubmit={form.handleSubmit(onSubmit)} */}
      <form onSubmit={handleSubmit(onSubmit)} className={"w-full"}>
        <div className={"grid gap-4 grid-cols-2"}>
          {/*a select box with options from api comes here */}
          <div>
            <Label>انتخاب شرکت حقوقی</Label>
            <Select
              onValueChange={(e) => {
                setValue("company_id", e);
              }}
              dir={"rtl"}
            >
              <SelectTrigger className="w-full h-11">
                <SelectValue placeholder="انتخاب شرکت" />
              </SelectTrigger>
              <SelectContent>
                {companiesDynamicList?.map((item) => (
                  <SelectItem key={item.id} value={item.id.toString()}>
                    {item.company_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <TextInput
            register={register}
            label="نام برند تجاری"
            error={errors.name?.message}
            name="name"
            required
            rules={{
              required: {
                value: true,
                message: "حداقل سه کارکتر وارد کنید",
              },
              minLength: {
                value: 3,
                message: "حداقل سه کارکتر وارد کنید",
              },
            }}
          />

          <TextInput
            register={register}
            label="نامک"
            error={errors.en_name?.message}
            name="en_name"
            required
            rules={{
              required: {
                value: true,
                message: "حداقل سه کارکتر وارد کنید",
              },
              minLength: {
                value: 3,
                message: "حداقل سه کارکتر وارد کنید",
              },
            }}
          />

          <TextInput
            register={register}
            label="آدرس سایت"
            error={errors.company_id?.message}
            name="email"
          />

          <TextInput
            register={register}
            label="ایمیل اصلی"
            error={errors.email?.message}
            name="email"
          />

          <TextInput
            register={register}
            label="شماره ثابت"
            error={errors.telephone?.message}
            name="telephone"
          />

          <TextInput
            register={register}
            label="شماره موبایل"
            error={errors.phone?.message}
            name="phone"
            required
            rules={{
              required: {
                value: true,
                message: "فیلد شماره تماس احباری است",
              },
              minLength: {
                value: 8,
                message: "حداقل ۸ عدد است",
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
            label="شماره کارت"
            error={errors.card_number?.message}
            name="card_number"
          />

          <TextInput
            register={register}
            label="نام صاحب حساب"
            error={errors.card_owner_name?.message}
            name="card_owner_name"
          />

          <TextInput
            register={register}
            label="شماره شبا"
            error={errors.ir_sheba?.message}
            name="ir_sheba"
          />

          <div className="col-span-2">
            <TextInput
              register={register}
              label="لینک درگاه پرداخت"
              error={errors.payment_link?.message}
              name="payment_link"
            />
          </div>

          <div className="col-span-2">
            <FileInput
              register={register}
              label="لوگو برند"
              error={errors.logo?.message}
              name="logo"
              accept="image/*"
            />
          </div>

          <div className="col-span-2">
            <TextInput
              register={register}
              label="توکن دسترسی سایت"
              error={errors.access_token?.message}
              name="access_token"
            />
          </div>

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

        <Button variant={"primary"} className="mt-4 w-full">
          ثبت شرکت
        </Button>
      </form>
    </div>
  );
}

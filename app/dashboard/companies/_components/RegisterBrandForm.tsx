import FileInput from "@/components/modules/FileInput";
import TextAreaInput from "@/components/modules/TexrAreaInput";
import TextInput from "@/components/modules/TextInput";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {PostBrandSchema} from "../_core/interfaces";
import {apiFetch} from "@/utils/api";
import {ApiResponse} from "@/types/apiResponse";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Label} from "@/components/ui/label";

export default function RegisterBrandForm() {
    // hooks
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<PostBrandSchema>();

    //   handlers
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
            const response = apiFetch<ApiResponse<void>>("/panel/companies", {
                method: "POST",
                body: formData,
            });

            console.log(response);
            console.log(formData);
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
                        <Label>
                            انتخاب شرکت حقوقی
                        </Label>
                        <Select dir={'rtl'}>
                            <SelectTrigger className="w-full h-11">
                                <SelectValue placeholder="Theme"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="کمپانی تست">کمپانی تست</SelectItem>
                                <SelectItem value="کمپانی تست ۲">کمپانی تست ۲</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    <TextInput
                        register={register}
                        label="نام برند"
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
                        label="شناسه ملی"
                        error={errors.email?.message}
                        name="email"
                        required
                        rules={{
                            minLength: {
                                value: 3,
                                message: "حداقل سه کارکتر وارد کنید",
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

                <Button variant={"primary"} className="mt-4 w-full">
                    ثبت شرکت
                </Button>
            </form>
        </div>
    );
}

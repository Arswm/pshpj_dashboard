"use client";

import {Controller, useForm} from "react-hook-form";
import {FormSchema} from "../_core/interfaces";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Switch} from "@/components/ui/switch";
import {Button} from "@/components/ui/button";
import {PostBlogAPI} from "../_core/requests";
import {Alert, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, Loader2} from "lucide-react";

const BlogForm = () => {

    const form = useForm<FormSchema>();

    const onSubmit = async (data: FormSchema) => {
        if (data.isPublished === undefined) {
            data.isPublished = false;
        }

        console.log(data);

        const response = await PostBlogAPI(data);

        if (!response) {
            alert("sth wrong...");
            return;
        }

        if (!response?.success) {
            alert("az samte back khata darim");
            return;
        }

        alert(response?.message);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-3">
                <Controller
                    control={form.control}
                    name="title"
                    rules={{
                        required: {
                            value: true,
                            message: "ejbari ast!",
                        },
                        minLength: {
                            value: 3,
                            message: "hadeAghal 3 character type kon...",
                        },
                    }}
                    render={({field}) => (
                        <Input
                            {...field}
                            placeholder="عنوان"
                            className={form.formState.errors.title && "border-red-500"}
                        />
                    )}
                />

                {form?.formState?.errors?.title && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4"/>
                        <AlertTitle>{form.formState.errors.title.message}</AlertTitle>
                    </Alert>
                )}
            </div>

            <div className="space-y-3">

                <Controller
                    control={form.control}
                    name="description"
                    rules={{
                        required: {
                            value: true,
                            message: "ejbari ast!",
                        },
                        minLength: {
                            value: 140,
                            message: "hadeAghal 140 character",
                        },
                        maxLength: {
                            value: 260,
                            message: "hadeAksar 260 character",
                        },
                    }}
                    render={({field}) => (
                        <Textarea
                            {...field}
                            placeholder="توضیحات مختصر"
                            rows={3}
                            className={form.formState.errors.description && "border-red-500"}
                        />
                    )}
                />

                {form?.formState?.errors?.description && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4"/>
                        <AlertTitle>{form.formState.errors.description.message}</AlertTitle>
                    </Alert>
                )}
            </div>

            <Controller
                control={form.control}
                name="thumbnail"
                render={({field}) => (
                    <Input
                        {...field}
                        placeholder="آدرس عکس"
                        className={form.formState.errors.thumbnail && "border-red-500"}
                    />
                )}
            />

            <Controller
                control={form.control}
                name="content"
                render={({field}) => (
                    <Textarea
                        {...field}
                        placeholder="باکس محتوا"
                        rows={5}
                        className={form.formState.errors.content && "border-red-500"}
                    />
                )}
            />

            <div>
                <label
                    htmlFor="isPublished"
                    className={form.formState.errors.thumbnail && "text-red-500"}
                >
                    انتشار؟
                </label>
                <Controller
                    control={form.control}
                    name="isPublished"
                    render={({field: {onChange, ref, value}}) => (
                        <Switch
                            onCheckedChange={onChange}
                            ref={ref}
                            defaultChecked={value}
                            name="isPublished"
                            id="isPublished"
                        />
                    )}
                />
            </div>

            <div>
                <label
                    htmlFor="schedule"
                    className={form.formState.errors.schedule && "text-red-500"}
                >
                    زمان بندی
                </label>
                <Controller
                    control={form.control}
                    name="schedule"
                    render={({field}) => (
                        <Input {...field} type="date" name="schedule" id="schedule"/>
                    )}
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                disabled={form.formState.isSubmitting}
            >
                {form.formState.isSubmitting ? (
                    <Loader2 className="animate-spin"/>
                ) : (
                    "انتشار محتوا"
                )}
            </Button>
        </form>
    );
};

export default BlogForm;

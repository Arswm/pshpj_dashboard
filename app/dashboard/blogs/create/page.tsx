'use client'

import React from "react";
import {Input} from "@/components/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {CalendarDays, ChevronDown, Clock, Eye, Newspaper, Pen, PlusCircle} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import {Switch} from "@/components/ui/switch";
import WordInput from "@/components/WordInput";
import {Button} from "@/components/ui/button";

function AddBlog() {

    return (
        <div className="container">
            <div className="flex gap-4 w-full">
                <div className={"w-full md:w-3/4 rounded-lg p-2"}>
                    {/*this is blog form*/}
                    <form className={"text-neutral-500"}>
                        <Input
                            placeholder={"عنوان مقاله (H1)"}
                            className={
                                "placeholder:font-bold placeholder:text-md placeholder:text-neutral-300 mb-8 border border-gray-300 focus-visible:border-primary/60"
                            }
                        />
                        <Tabs defaultValue="content" className="w-full" dir={"rtl"}>
                            <TabsList
                                className={
                                    "w-full justify-start rounded-t rounded-b-none p-0 border-l border-r border-t bg-tabs-gray"
                                }
                            >
                                <TabsTrigger className={"tabs-trigger"} value="content">
                                    محتوا
                                </TabsTrigger>
                                <TabsTrigger className={"tabs-trigger"} value="seo">
                                    سئو
                                </TabsTrigger>
                                <TabsTrigger className={"tabs-trigger"} value="images">
                                    تصاویر
                                </TabsTrigger>
                                <TabsTrigger className={"tabs-trigger"} value="schema">
                                    اسکیما
                                </TabsTrigger>
                                <TabsTrigger className={"tabs-trigger"} value="element">
                                    شبکه های اجتماعی
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent className={"mt-0"} value="content">
                                <div className={"border-b border-r border-l space-y-4 pt-4 p-4 bg-white"}>

                                    {/*rich text editor section */}
                                    <section className={"bg-tabs-gray rounded p-2"}>
                                        text editor
                                    </section>

                                </div>
                            </TabsContent>
                            <TabsContent className={"mt-0"} value="seo">
                                {/*seo title seo discription canonical and seo general setting*/}
                                <div className={"border-b border-r border-l space-y-4 pt-4 p-4 bg-white"}>
                                    <section className={"bg-tabs-gray rounded px-8 p-2"}>
                                        {/*dont repeat yourself*/}
                                        <div className={"mb-4"}>
                                            <div className={"flex justify-end"}>
                                                <Button
                                                    className={
                                                        "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                    }
                                                >
                                                    <Pen size={14}/>
                                                    پیشنهاد AI
                                                </Button>
                                            </div>
                                            <div className={"flex gap-4 items-center my-2"}>
                                                <Label className={"w-1/4"}>
                                                    کلید واژه
                                                    <span className={"text-red-500 ps-1"}>*</span>
                                                </Label>
                                                <Input className={"w-3/4"}/>
                                            </div>
                                        </div>

                                        {/*dont repeat yourself*/}
                                        <div className={"mb-4"}>
                                            <div className={"flex justify-end"}>
                                                <Button
                                                    className={
                                                        "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                    }
                                                >
                                                    <Pen size={14}/>
                                                    پیشنهاد AI
                                                </Button>
                                            </div>
                                            <div className={"flex gap-4 items-center my-2"}>
                                                <Label className={"w-1/4"}>
                                                    عنوان سئو
                                                    <span className={"text-red-500 ps-1"}>*</span>
                                                </Label>
                                                <Input className={"w-3/4"}/>
                                            </div>
                                        </div>

                                        <div className={"mb-4"}>
                                            <div className={"flex justify-end"}>
                                                <Button
                                                    className={
                                                        "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                    }
                                                >
                                                    <Pen size={14}/>
                                                    پیشنهاد AI
                                                </Button>
                                            </div>
                                            <div className={"flex gap-4 items-center my-2"}>
                                                <Label className={"w-1/4"}>
                                                    کلمات مترادف
                                                    <span className={"text-red-500 ps-1"}>*</span>
                                                </Label>
                                                <WordInput/>
                                            </div>
                                        </div>

                                        {/*dont repeat yourself*/}
                                        <div className={"mb-4"}>
                                            <div className={"flex justify-end"}>
                                                <Button
                                                    className={
                                                        "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                    }
                                                >
                                                    <Pen size={14}/>
                                                    پیشنهاد AI
                                                </Button>
                                            </div>
                                            <div className={"flex gap-4 items-center my-2"}>
                                                <Label className={"w-1/4"}>
                                                    توضیحات متا سئو
                                                    <span className={"text-red-500 ps-1"}>*</span>
                                                </Label>
                                                <Textarea rows={10} className={"w-3/4"}/>
                                            </div>
                                        </div>

                                        {/*dont repeat yourself*/}
                                        <div className={"mb-4"}>
                                            <div className={"flex justify-end"}>
                                                <Button
                                                    className={
                                                        "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                    }
                                                >
                                                    <Pen size={14}/>
                                                    پیشنهاد AI
                                                </Button>
                                            </div>

                                            <div className={"flex gap-4 items-center my-2"}>
                                                <Label className={"w-1/4"}>
                                                    (canonical)
                                                    <span className={"text-red-500 ps-1"}>*</span>
                                                </Label>
                                                <Input className={"w-3/4"}/>
                                            </div>
                                        </div>

                                        <div className={"border bg-white rounded p-4 space-y-3"}>
                                            <div className={"flex justify-between items-center"}>
                                                <p>
                                                    به موتور های جستجو اجازه دهید این محتوا را در نتایج
                                                    نشان دهند ؟
                                                </p>
                                                <Switch/>
                                            </div>
                                            <div className={"flex justify-between items-center"}>
                                                <p>
                                                    به موتور های جستجو اجازه دهید این محتوا را در نتایج
                                                    نشان دهند ؟
                                                </p>
                                                <Switch/>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </TabsContent>
                            <TabsContent className={"mt-0"} value="images">
                                <div className={'border-b border-r border-l space-y-4 pt-4 p-4 bg-white'}>
                                    {/*images section*/}
                                    <section className={"bg-tabs-gray rounded p-2"}>
                                        <div className={"px-8 mt-4"}>
                                            <h3 className={"text-primary text-lg font-medium"}>
                                                تصاویر شاخص مقاله
                                            </h3>

                                            <div className={`flex flex-col gap-2 mb-4`}>
                                                <div className={"flex justify-between mb-4 mt-8"}>
                                                    <div className={"w-1/4"}>
                                                        <Label>
                                                            تصویر شاخص
                                                            <span className={"text-red-500 ps-1"}>*</span>
                                                        </Label>
                                                    </div>
                                                    <div className={"w-3/4"}>
                                                        <Image
                                                            className={
                                                                "object-cover w-full h-[300px] ms-auto rounded-lg"
                                                            }
                                                            src={
                                                                "/images/blog-page/blog-images-placeholder.png"
                                                            }
                                                            alt={""}
                                                            width={600}
                                                            height={300}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={"flex gap-4 items-center"}>
                                                    <Label className={"w-1/4"}>
                                                        عنوان تصویر
                                                        <span className={"text-red-500 ps-1"}>*</span>
                                                    </Label>
                                                    <Input className={"w-3/4"}/>
                                                </div>

                                                {/*dont repeat yourself*/}
                                                <div className={"mb-4"}>
                                                    <div className={"flex justify-end"}>
                                                        <Button
                                                            className={
                                                                "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                            }
                                                        >
                                                            <Pen size={14}/>
                                                            پیشنهاد AI
                                                        </Button>
                                                    </div>
                                                    <div className={"flex gap-4 items-center my-2"}>
                                                        <Label className={"w-1/4"}>
                                                            توضیحات تصویر
                                                            <span className={"text-red-500 ps-1"}>*</span>
                                                        </Label>
                                                        <Input className={"w-3/4"}/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>

                                    <section className={"bg-tabs-gray rounded p-2"}>
                                        <div className={"px-8 mt-4"}>
                                            <h3 className={"text-primary text-lg font-medium"}>
                                                تصاویر مقاله
                                            </h3>

                                            <div className={`flex flex-col gap-2 mb-4`}>
                                                <div className={"flex justify-between mb-4 mt-8"}>
                                                    <div className={"w-1/4"}>
                                                        <Label>
                                                            تصویر شاخص
                                                            <span className={"text-red-500 ps-1"}>*</span>
                                                        </Label>
                                                    </div>
                                                    <div className={"w-3/4"}>
                                                        <Image
                                                            className={
                                                                "object-cover w-full h-[300px] ms-auto rounded-lg"
                                                            }
                                                            src={
                                                                "/images/blog-page/blog-images-placeholder.png"
                                                            }
                                                            alt={""}
                                                            width={600}
                                                            height={300}
                                                        />
                                                    </div>
                                                </div>

                                                <div className={"flex gap-4 items-center"}>
                                                    <Label className={"w-1/4"}>
                                                        عنوان تصویر
                                                        <span className={"text-red-500 ps-1"}>*</span>
                                                    </Label>
                                                    <Input className={"w-3/4"}/>
                                                </div>

                                                {/*dont repeat yourself*/}
                                                <div className={"mb-4"}>
                                                    <div className={"flex justify-end"}>
                                                        <Button
                                                            className={
                                                                "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                            }
                                                        >
                                                            <Pen size={14}/>
                                                            پیشنهاد AI
                                                        </Button>
                                                    </div>
                                                    <div className={"flex gap-4 items-center my-2"}>
                                                        <Label className={"w-1/4"}>
                                                            توضیحات تصویر
                                                            <span className={"text-red-500 ps-1"}>*</span>
                                                        </Label>
                                                        <Input className={"w-3/4"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'flex justify-end'}>
                                            <Button variant={'blog'}>
                                                <PlusCircle/>
                                                افزودن تصویر
                                            </Button>
                                        </div>
                                    </section>
                                </div>
                            </TabsContent>
                            <TabsContent className={"mt-0"} value="schema">
                                <div className={'border-b border-r border-l space-y-4 pt-4 p-4 bg-white'}>
                                    <section className={"bg-tabs-gray rounded px-8 p-2"}>
                                        {/*dont repeat yourself*/}
                                        <h3 className={'text-primary text-lg font-medium'}>
                                            ویدیو مقاله
                                        </h3>
                                        <div className={'flex flex-col gap-4'}>
                                            <div className={"mb-4"}>
                                                <div className={"flex gap-4 items-center pt-6 my-2"}>
                                                    <Label className={"w-1/4"}>
                                                        لینک ویدیو
                                                        <span className={"text-red-500 ps-1"}>*</span>
                                                    </Label>
                                                    <Input className={"w-3/4"}/>
                                                </div>
                                            </div>

                                            {/*dont repeat yourself*/}
                                            <div className={"mb-4"}>
                                                <div className={"flex gap-4 items-center my-2"}>
                                                    <Label className={"w-1/4"}>
                                                        آپارات / یوتیوب
                                                    </Label>
                                                    <Input className={"w-3/4"}/>
                                                </div>
                                            </div>

                                            {/*dont repeat yourself*/}
                                            <div className={"mb-4"}>
                                                <div className={"flex gap-4 items-center my-2"}>
                                                    <Label className={"w-1/4"}>
                                                        لینک کاور ویدیو
                                                    </Label>
                                                    <Input className={"w-3/4"}/>
                                                </div>
                                            </div>

                                            <div className={'flex justify-end'}>
                                                <Button variant={'blog'}>
                                                    <PlusCircle/>
                                                    افزودن ویدیو
                                                </Button>
                                            </div>
                                        </div>
                                    </section>

                                    <section className={"bg-tabs-gray rounded px-8 p-2"}>
                                        {/*dont repeat yourself*/}
                                        <h3 className={'text-primary text-lg font-medium'}>
                                            جدول مقالات
                                        </h3>
                                        <div className={'flex flex-col gap-4'}>
                                            <div className={"mb-4"}>
                                                <div className={"flex justify-end"}>
                                                    <Button
                                                        className={
                                                            "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                        }
                                                    >
                                                        <Pen size={14}/>
                                                        پیشنهاد AI
                                                    </Button>
                                                </div>
                                                <div className={"flex gap-4 items-center my-2"}>
                                                    <Label className={"w-1/4"}>
                                                        توضیحات
                                                        <span className={"text-red-500 ps-1"}>*</span>
                                                    </Label>
                                                    <Input className={"w-3/4"}/>
                                                </div>
                                            </div>

                                            <div className={'flex justify-end'}>
                                                <Button variant={'blog'}>
                                                    <PlusCircle/>
                                                    افزودن جدول
                                                </Button>
                                            </div>
                                        </div>
                                    </section>

                                    <section className={"bg-tabs-gray rounded px-8 p-2"}>
                                        {/*dont repeat yourself*/}
                                        <h3 className={'text-primary text-lg font-medium'}>
                                            سوالات متداول
                                        </h3>
                                        <div className={'flex flex-col gap-4 mt-8'}>
                                            <div className={"mb-4"}>
                                                <div className={"flex gap-4 items-center my-2"}>
                                                    <Label className={"w-1/4"}>
                                                        تعداد سوالات با پاسخ
                                                        <span className={"text-red-500 ps-1"}>*</span>
                                                    </Label>
                                                    <Input className={"w-3/4"}/>
                                                </div>
                                            </div>

                                            <div className={"mb-4"}>
                                                <div className={"flex gap-4 items-center my-2"}>
                                                    <Label className={"w-1/4"}>
                                                        توضیحات برای ساخت
                                                    </Label>
                                                    <Input className={"w-3/4"}/>
                                                </div>
                                                <div className={"flex justify-end"}>
                                                    <Button
                                                        className={
                                                            "bg-primary hover:bg-primary/90 transition-all duration-200 text-white px-4 py-1 my-2 rounded cursor-pointer inline-flex gap-2 self-end items-center text-sm"
                                                        }
                                                    >
                                                        <Pen size={14}/>
                                                        ساخت با AI
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className={'grid gap-4 md:grid-cols-3'}>
                                                <div className={'bg-white shadow rounded-lg p-4'}>
                                                    <h3 className={'font-medium text-[16px]'}>
                                                        سوال اینجا میاد
                                                    </h3>
                                                    <div className={'bg-primary h-1 rounded-lg my-3 w-full'}>

                                                    </div>
                                                    <p className={'text-sm text-slate-400 text-justify'}>
                                                        لورم ایپسوم متن ساختگی است برای ایم پارد نشسید مکشسی نشسیننکشس
                                                        نیحشس مشیمشم سنی
                                                    </p>
                                                </div>
                                                <div className={'bg-white shadow rounded-lg p-4'}>
                                                    <h3 className={'font-medium text-[16px]'}>
                                                        سوال اینجا میاد
                                                    </h3>
                                                    <div className={'bg-primary h-1 rounded-lg my-3 w-full'}>

                                                    </div>
                                                    <p className={'text-sm text-slate-400 text-justify'}>
                                                        لورم ایپسوم متن ساختگی است برای ایم پارد نشسید مکشسی نشسیننکشس
                                                        نیحشس مشیمشم سنی
                                                    </p>
                                                </div>
                                                <div className={'bg-white shadow rounded-lg p-4'}>
                                                    <h3 className={'font-medium text-[16px]'}>
                                                        سوال اینجا میاد
                                                    </h3>
                                                    <div className={'bg-primary h-1 rounded-lg my-3 w-full'}>

                                                    </div>
                                                    <p className={'text-sm text-slate-400 text-justify'}>
                                                        لورم ایپسوم متن ساختگی است برای ایم پارد نشسید مکشسی نشسیننکشس
                                                        نیحشس مشیمشم سنی
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </TabsContent>
                            <TabsContent className={"mt-0"} value="element">
                                <div className={'border-b border-r border-l space-y-4 pt-4 p-4 bg-white'}>
                                    <div className={'bg-tabs-gray rounded p-2'}>
                                        element
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </form>
                </div>
                <div className={"w-1/4 rounded-lg p-2 "}>
                    <div className={'flex justify-between gap-4 mb-8'}>
                        <Button variant={'primary'} className={'w-1/3 min-h-11'}>
                            زبان
                            <ChevronDown/>
                        </Button>
                        <Button variant={'primary'} className={'w-1/3 min-h-11'}>
                            <Eye/>
                            پیش نمایش
                        </Button>
                        <Button variant={'primary'} className={'w-1/3 min-h-11'}>
                            وضعیت
                            <ChevronDown/>
                        </Button>
                    </div>
                    <div className={'flex bg-white py-4 px-1 rounded-lg border items-center gap-1.5 ps-4 mb-8 h-16'}>
                        <Image src={'/images/blog-page/user-image.jpg'} width={40} height={40} alt={'user icon'}
                               className={'w-10 h-10 object-cover rounded-md'}/>
                        <p className={'text-gray-500'}>
                            محمد امین عابدی (مدیر)
                        </p>
                    </div>
                    <p className={'mb-2'}>
                        زمان انتشار
                    </p>
                    <div className={'flex gap-4 text-gray-400'}>
                        <div className={'bg-white border rounded-lg py-2 px-4 flex items-center gap-2 w-1/2'}>
                            <Clock/>
                            16:00
                        </div>
                        <div className={'bg-white border rounded-lg py-2 px-4 flex items-center gap-2 grow h-11 w-1/2'}>
                            <CalendarDays/>
                            2025/02/01
                        </div>
                    </div>

                    <p className={'mt-4'}>
                        نامک
                    </p>
                    <div className={'flex gap-4 text-gray-400 mt-1'}>
                        <div className={'bg-white border rounded-lg py-2 px-4 flex items-center gap-4 w-full h-11'}>
                            <Newspaper/>
                            <Input className={'h-8 border-none shadow-none'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlog;

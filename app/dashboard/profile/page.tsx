import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    Building,
    Calendar,
    Camera,
    DollarSign,
    Fingerprint,
    Mail,
    Mailbox,
    MapPinHouse,
    Pen,
    Phone
} from "lucide-react";

import {Label} from "@/components/ui/label";

function ProfilePage() {
    return (
        <>
            <div className={'flex justify-center items-center mt-20'}>
                <div className={'container max-w-4xl select-none'}>
                    <div className={'relative'}>
                        <Image className={'w-full min-h-[240px] object-cover block'} src={'/images/profile/banner.webp'}
                               alt={'user banner'} width={642} height={400}/>
                        <Button variant={'primary'} size={'sm'}
                                className={'text-sm inline-flex items-center justify-center absolute bottom-2 right-2 rounded-sm'}>
                            ویرایش
                            <Pen/>
                        </Button>
                        <div
                            className={'bg-transparent backdrop-blur-sm rounded-full size-40 absolute left-0 right-0 mx-auto -bottom-[70px]'}>
                            <Image className={'w-full h-full rounded-full p-2 object-cover block'}
                                   src={'/images/profile/user.webp'}
                                   alt={'user image'} width={642} height={400}/>
                            <Label
                                className="bg-primary w-fit absolute bottom-2 right-2 text-white p-2 rounded-full cursor-pointer">
                                <Camera/>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                />
                            </Label>
                        </div>
                    </div>
                    <div className={'bg-white p-2 pt-20'}>
                        <p className={'text-center font-medium mb-2'}>
                            محمد امین عابدی (مشتری)
                        </p>
                        <p className={'text-center font-medium text-gray-500'}>
                            شرکت پردیس شگفت پارس جنوب
                        </p>

                        <div className={'w-[80%] mx-auto pb-14'}>
                            <div
                                className={'border rounded border-gray-100 flex items-center justify-center mx-auto mt-4 text-sm w-full'}>
                                <div className={'border-e p-2 inline-flex justify-center gap-2 items-center grow'}>
                                    <p className={'font-medium'}>
                                        1371/12/10
                                    </p>
                                    <Calendar size={16} className={'flex items-center'}/>
                                </div>
                                <div className={'border-e p-2 inline-flex justify-center gap-2 items-center grow'}>
                                    <p className={'font-medium'}>
                                        MR.ABEDI1993@GMAIL.COM
                                    </p>
                                    <Mail size={16} className={'flex items-center'}/>
                                </div>
                                <div className={'border-e p-2 inline-flex justify-center gap-2 items-center grow'}>
                                    <p className={'font-medium'}>
                                        09109967686
                                    </p>
                                    <Phone size={16} className={'flex items-center'}/>
                                </div>
                            </div>

                            <div
                                className={'border rounded border-gray-100 flex items-center justify-center mx-auto mt-4 text-sm w-full'}>
                                <div className={'border-e p-2 inline-flex justify-center gap-2 items-center grow'}>
                                    <MapPinHouse size={16} className={'flex items-center'}/>
                                    <p className={'font-medium'}>
                                        البرز - شهرستان کرج - خیابان گلزار شرقی = پلاک ۹۳ - زنگ دوم
                                    </p>
                                </div>
                                <div className={'border-e p-2 inline-flex justify-center gap-2 items-center grow'}>
                                    <p className={'font-medium'}>
                                        0110320125
                                    </p>
                                    <Fingerprint size={16} className={'flex items-center'}/>
                                </div>
                            </div>

                            <div
                                className={'border rounded border-gray-100 flex items-center justify-center mx-auto mt-4 text-sm w-full'}>
                                <div className={'border-e p-2 inline-flex justify-center gap-2 items-center grow'}>
                                    <Mailbox size={16} className={'flex items-center'}/>
                                    <p className={'font-medium'}>
                                        کد پستی : ۱۴۹۵۹۴۳۵۷۳
                                    </p>
                                </div>
                                <div className={'border-e p-2 inline-flex justify-center gap-2 items-center grow'}>
                                    <Building size={16} className={'flex items-center'}/>
                                    <p className={'font-medium'}>
                                        شماره ثبت :‌۵۲۰۹۴۴
                                    </p>
                                </div>
                                <div className={'border-e p-2 inline-flex justify-center gap-2 items-center grow'}>
                                    <DollarSign size={16} className={'flex items-center'}/>
                                    <p className={'font-medium'}>
                                        کد اقتصادی :‌۸۷۱۲۴۸۷۱۲۳۹۱
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
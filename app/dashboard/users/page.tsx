'use client';

import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import TextInput from '@/components/shared/TextInput';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DatabaseBackup } from 'lucide-react';

export default function UserPage() {
  const { register } = useForm();
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [startContract, setStartContract] = useState<Date | undefined>(undefined);
  const [endContract, setEndContract] = useState<Date | undefined>(undefined);
  return (
    <div className="bg-white shadow rounded-lg p-6 grid grid-cols-2 gap-4">
      <div className=" grid grid-cols-2 place-items-center gap-4">
        <TextInput name="first_name" label="نام" register={register} />
        <TextInput name="last_name" label="نام خانوادگی" register={register} />

        <TextInput name="phone" label="شماره تماس" register={register} />
        <TextInput name="email" label="ایمیل" register={register} />

        <TextInput name="national_id" label="مبلغ حقوق" register={register} />
        <TextInput name="national_id" label="عنوان شغلی" register={register} />

        <TextInput className="grow" name="national_id" label="کد ملی" register={register} />

        <div className="w-full">
          <Label>جنسیت</Label>
          <Select>
            <SelectTrigger className="h-11 focus:ring-0 rounded border-gray-200">
              <SelectValue placeholder="مرد" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">مرد</SelectItem>
              <SelectItem value="1">زن</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full">
          <Label>نوع همکاری</Label>
          <Select>
            <SelectTrigger className="h-11 focus:ring-0 rounded border-gray-200">
              <SelectValue placeholder="حضوری" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="onSite">حضوری</SelectItem>
              <SelectItem value="remote">غیرحضوری</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-full justify-end translate-y-0.5">
          <Label className="mb-1">تاریخ تولد</Label>
          <DatePicker
            value={birthDate}
            onChange={(e) => setBirthDate(e?.toDate())}
            locale={persian_fa}
            calendar={persian}
            maxDate={new Date()}
            calendarPosition="left"
            render={(value, openCalender) => (
              <div className="relative">
                <Input
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
        <div className="flex flex-col w-full justify-end translate-y-0.5">
          <Label className="mb-1">تاریخ شروع قرارداد</Label>
          <DatePicker
            value={startContract}
            onChange={(e) => setStartContract(e?.toDate())}
            locale={persian_fa}
            calendar={persian}
            maxDate={new Date()}
            calendarPosition="top"
            render={(value, openCalender) => (
              <div className="relative">
                <Input
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
            value={endContract}
            onChange={(e) => setEndContract(e?.toDate())}
            locale={persian_fa}
            calendar={persian}
            maxDate={new Date()}
            calendarPosition="left"
            render={(value, openCalender) => (
              <div className="relative">
                <Input
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
      </div>

      <div className="">left</div>
    </div>
  );
}

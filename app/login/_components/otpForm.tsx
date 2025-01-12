import React from 'react';
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import {REGEXP_ONLY_DIGITS_AND_CHARS} from "input-otp";
import Timer from "@/components/ui/Timer";
import {ApiUrl} from "@/constants/ApiUrl";
import {setTokenToCookie} from "@/actions/cookie";
import {useRouter} from "next/navigation";

function  OtpForm() {
    const router = useRouter();

    // this will send otp code to the verify-code  endpoint
    async function handleOtpChange(data: string) {
        const formattedData = {
            code: data,
            type: "login",
        };
        try {
            const response = await fetch(`${ApiUrl}/auth/verify-code`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formattedData),
            });

            const apiResponse = await response.json();

            // Check for a successful response and redirect
            if (apiResponse.success) {
                await setTokenToCookie(apiResponse.data);

                router.push("/dashboard"); 
            } else {
                console.error(apiResponse.message || "Verification failed");
                // here we add the error for user to see the verification code was wrong
            }
        } catch (e) {
            console.log("fetch failed error :", e);
        }
    }

    return (
        <div>
            <p className={"text-center mx-auto mb-4"}>
                لطفا کد ۶ رقمی ارسال شده را وارد کنید
            </p>

            <InputOTP
                dir={"ltr"}
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                onComplete={handleOtpChange}
            >
                <InputOTPGroup className={"flex-row-reverse mx-auto"}>
                    <InputOTPSlot index={0}/>
                    <InputOTPSeparator className={"opacity-0"}/>
                    <InputOTPSlot index={1}/>
                    <InputOTPSeparator className={"opacity-0"}/>
                    <InputOTPSlot index={2}/>
                    <InputOTPSeparator className={"opacity-0"}/>
                    <InputOTPSlot index={3}/>
                    <InputOTPSeparator className={"opacity-0"}/>
                    <InputOTPSlot index={4}/>
                    <InputOTPSeparator className={"opacity-0"}/>
                    <InputOTPSlot index={5}/>
                </InputOTPGroup>
            </InputOTP>

            <Timer initialTime={120}/>
            <div className={"flex justify-center"}>
                <a
                    href={"/login"}
                    className={
                        "text-center mt-7 text-slate-400  py-0.5 px-4 rounded cursor-pointer"
                    }
                >
                    ویرایش شماره تماس
                </a>
            </div>
        </div>
    );
}

export default OtpForm;
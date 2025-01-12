// /core/requests.ts
import { ApiResponse } from "@/types/apiResponse";
import { ILoginSchema } from "@/app/login/_core/interfaces";
import { ApiUrl } from "@/constants/ApiUrl";

export async function PostOtp(data: ILoginSchema): Promise<ApiResponse<null>> {
  const response = await fetch(`${ApiUrl}/auth/otp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(
      `Server error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}



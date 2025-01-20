export interface ILoginSchema {
  username: string;
  type: string;
}

export type ILoginResponse =
  | {
      success: boolean;
      message?: {
        message: string[];
      };
      errors?: {
        [key: string]: string[];
      };
    }
  | undefined;

export type IVerfySchema = {
  code: string;
  type: string;
};

export type IVerifyResponse =
  | {
      success: boolean;
      data: string;
      errors?: {
        message: string[];
      };
      message?: string | null;
    }
  | undefined;

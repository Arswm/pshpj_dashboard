export interface ILoginSchema {
  username: string;
  type: string;
}

export interface ILoginResponse {
  success: boolean;
  message: {
    success: string | null;
  };
  data: {
    token: string;
  };
}

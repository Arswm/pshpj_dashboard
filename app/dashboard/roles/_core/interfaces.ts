export type IGetPermissionResponse =
  | {
      success: boolean;
      message: string;
      data: {
        [key: string]: IGetPermission[];
      };
    }
  | undefined;

export type IGetPermission = {
  en?: string;
  key: string;
  value: string;
};

export type IGetRolesResponse =
  | {
      success: boolean;
      message: string;
      data?: IGetRole[];
    }
  | undefined;

export type IGetRole = {
  en : string
  id: string;
  name: string;
};

export type IRegisterRole = {
  name: string;
  permissions: string[];
};
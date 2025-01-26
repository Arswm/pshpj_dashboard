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
      data: IGetRole[];
    }
  | undefined;

export type IGetRole = {
  id: string;
  name: string;
};

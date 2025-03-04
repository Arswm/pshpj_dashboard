export interface IGetUserRolesRepsonse {
  data?: IGetUserRoles[];
  message: string;
  success: boolean;
}

export interface IPosTUserRolesRepsonse {
  message: string;
  success: boolean;
}

export interface IGetUserRoles {
  id: string;
  name: string;
}

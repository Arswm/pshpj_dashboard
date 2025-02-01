import { IMedia } from '@/interfaces/IMedia';

export interface IPostCompanySchema {
  company_name: string;
  owner_name: string;
  national_number?: string;
  registration_number: string;
  economic_identifier?: string;
  telephone_number?: string;
  postal_code?: string;
  address?: string;
  ir_sheba?: string;
  tax?: string;
  account_number?: string;
  card_number?: string;
  card_owner_name?: string;
  website?: string;
  access_token?: string;
  seal?: File | null;
  signature?: File | null;
  logo?: File | null;
  letterhead?: File | null;
}

export interface IPostBrandSchema {
  name: string;
  company_id: string;
  logo: File | null;
  website: string;
  email: string;
  telephone: string;
  phone: string;
  card_number: string;
  card_owner_name: string;
  ir_sheba: string;
  address: string;
  payment_link: string;
  access_token: string;
  en_name: string;
}

export interface IGetBrand {
  id: string;
  name: string;
  company_name: string;
  logo: IMedia;
}

export interface ICompaniesDynamicList {
  company_name: string;
  id: string;
}

export interface IGetCompany {
  id: number;
  company_name: string;
  owner_name: string;
  national_number?: string;
  telephone_number: string;
  registration_number?: string;
  economic_identifier?: string;
  postal_code?: string;
  website?: string;
  access_token?: string;
  address?: string;
  tax?: number;
  ir_sheba?: string;
  card_number?: string;
  card_owner_name?: string;
  created_at?: string;
  updated_at?: string;
  logo?: IMedia;
  letterhead?: IMedia;
  seal?: IMedia;
  signature?: IMedia;
}

export interface IGetCompanyProps {
  currentPage: number;
  per_page: number;
  search: string;
}

export type IDynamicListResponse =
  | {
      success: boolean;
      data: ICompaniesDynamicList[];
    }
  | undefined;

export type IPostBrandResponse =
  | {
      success?: boolean;
      message: string;
      errors?: {
        [key: string]: string[];
      };
    }
  | undefined;

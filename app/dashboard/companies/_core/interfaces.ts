export interface PostCompanySchema {
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

export interface PostBrandSchema {
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

export interface CompaniesDynamicList {
  company_name: string;
  id: string;
}

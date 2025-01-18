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
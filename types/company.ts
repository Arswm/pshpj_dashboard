import { FileObject } from "@/types/file";

export interface Company {
  id: number;
  company_name: string;
  owner_name: string;
  national_number?: string | null;
  account_number?: string | null;
  card_owner_name?: string | null;
  card_number?: string | null;
  registration_number?: string | null;
  economic_identifier?: string | null;
  telephone_number: string;
  postal_code?: string | null;
  letterhead?: FileObject | null;
  ir_sheba: string | null;
  tax?: string | null;
  seal?: FileObject | null;
  signature?: FileObject | null;
  logo?: FileObject | null;
  website?: string | null;
  access_token?: string | null;
  address?: string | null;
}

export interface LinksPaginate {
  url: string | null;
  label: string;
  active: boolean;
}

export interface GetCompaniesResponse {
  current_page: number | null;
  data: Company[];
  first_page_url: string | null;
  from: number | null;
  last_page: number | null;
  last_page_url: string | null;
  Links: LinksPaginate[] | null;
  next_page_url: string | null;
  path: string | null;
  per_page: number | null;
  prev_page_url: string | null;
  to: number | null;
  total: number | null;
}

export interface CompanySelectInterface {
  id: number;
  company_name: string;
}

import { IBackendDate } from "@/interfaces/IBackendDate";
import { ILink } from "@/interfaces/ILink";

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: Pagination;
}

export interface Pagination {
  current_page: number
  data: IGetUser[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: ILink[]
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export interface IGetUser {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  birthday?: IBackendDate;
  insurance: number;
  uncompleted_fields: number;
  agreement_end_date?: IBackendDate;
  job_title : string
  role : string
}
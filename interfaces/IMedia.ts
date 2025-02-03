import { MediaType } from './IType';

export interface IMedia {
  id: string;
  title: string;
  alt: string;
  type: MediaType;
  url: string;
}
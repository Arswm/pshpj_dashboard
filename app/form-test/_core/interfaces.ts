export interface FormSchema {
  title: string;
  description: string;
  thumbnail: string;
  content: string;
  isPublished: boolean;
  schedule: string;
}

export interface AddBlogResponse {
  success: boolean;
  data: [];
}

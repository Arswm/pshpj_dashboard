export type ApiResponse<T = never> = T extends never
  ? {
      success: false;
      message: string;
      errors: ApiErrors;
    }
  : {
      success: true;
      data: T;
      message?: string;
    };

export type ApiErrors = {
    [key: string]: string[]; // For field-specific or generic errors
};

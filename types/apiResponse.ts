export type ApiResponse<T> =
    | {
    success: true;
    data: T;
    message?: string;
}
    | {
    success: false;
    message: string;
    errors: ApiErrors;
};

export type ApiErrors = {
    [key: string]: string[]; // For field-specific or generic errors
};

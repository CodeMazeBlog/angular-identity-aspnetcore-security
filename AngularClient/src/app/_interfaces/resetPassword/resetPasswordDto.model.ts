export interface ResetPasswordDto {
    password: string;
    confirmPassword: string;
    email: string;
    token: string;
}
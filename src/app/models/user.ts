export interface User{
    userId: number;
    username: string;
    password: string;
    enabled: boolean;
    authorities: string;
}
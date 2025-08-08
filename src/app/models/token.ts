export interface Token {
  jwtoken: string; // <--- CAMBIO AQUÍ
  id: number;
  authorities: string;
}

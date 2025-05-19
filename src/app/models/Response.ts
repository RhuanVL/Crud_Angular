export interface Response<T> {
  sucesso: boolean;
  mensagem?: string;
  dados?: T;
}

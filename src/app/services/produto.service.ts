import { response } from 'express';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProdutoLista } from '../models/Produto';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  ApiIntegration = environment.UrlApi;

  constructor(private http : HttpClient) { }

  //Overload para o Get
  getProdutos(): Observable<any>;
  getProdutos(id: number): Observable<any>;

  getProdutos(id?:number) : Observable<any> {
    const url = id ? `${this.ApiIntegration}?id=${id}` : this.ApiIntegration;

    return this.http.get<any>(url).pipe(
      map(response => {
        // Se a API retorna diretamente o array
        if (Array.isArray(response)) {
          return { dados: response, mensagem: '', status: true };
        }
        return response;
      })
      );
}

  criarProduto(produto : ProdutoLista) : Observable<Response<ProdutoLista[]>> {
    return this.http.post<Response<ProdutoLista[]>>(this.ApiIntegration, produto);
}

  deletarProduto(id:number) : Observable<Response<ProdutoLista[]>> {
    return this.http.delete<Response<ProdutoLista[]>>(`${this.ApiIntegration}?id=${id}`);
}

  editarProduto(id: number, produto: ProdutoLista): Observable<Response<ProdutoLista[]>> {
  return this.http.put<Response<ProdutoLista[]>>(
    `${this.ApiIntegration}?id=${id}`,
    JSON.stringify(produto), // Convertendo para JSON, se necessário
    { headers: { 'Content-Type': 'application/json' } } // Definindo o cabeçalho, se necessário
  );
}
}

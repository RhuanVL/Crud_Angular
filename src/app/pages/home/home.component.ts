import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoLista } from '../../models/Produto';
import { response } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private serviceProduto: ProdutoService) {
    console.log('Serviço injetado:', serviceProduto);
  }

  ngOnInit(): void {
    this.serviceProduto.getProdutos().subscribe({
      next: (response) => {
  console.log('Resposta completa:', response);
  console.log('Tipo de dados:', typeof response.dados);
  console.log('É array?', Array.isArray(response.dados));
  this.produtos = response.dados || [];
  this.isLoading = false;
  },
      error: (err) => {
        console.error('Erro na requisição:', err);
        this.errorMessage = 'Erro ao carregar produtos';
        this.isLoading = false;
      }
    });
  }

  deletar(id:number){
      this.serviceProduto.deletarProduto(id).subscribe(response => {
        console.log(response)
        window.location.reload()
      })
  }
}

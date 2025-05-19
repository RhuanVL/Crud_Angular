import { ProdutoService } from './../../services/produto.service';
import { ProdutoLista } from './../../models/Produto';
import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormularioComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  produto?: ProdutoLista;
  errorMessage : string = '';
  btnAcao = "Editar";
  nomeTitulo = "Editar Produtos";

  constructor(private ProdutoService: ProdutoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
  console.log(1);
  const id = Number(this.route.snapshot.paramMap.get('id'));
  console.log(id);

  this.ProdutoService.getProdutos(id).subscribe(response => {
    console.log('Resposta completa:', response);
    console.log('Tipo da resposta:', typeof response);
    console.log('Dados:', response.dados);
      if (response && response.dados && Array.isArray(response.dados)) {
      // Filtrar o produto pelo ID e atribuir ao objeto produto
      this.produto = response.dados.find((item: ProdutoLista) => item.id === id);
      console.log('Produto encontrado:', this.produto);
    } else {
      console.error('Erro: Dados não estão no formato esperado.');
    }
  });
}

  editarProduto(id:number, produto:ProdutoLista) {
    console.log(1);
    console.log(id);
    this.ProdutoService.editarProduto(id, produto).subscribe(response => {
    console.log('Resposta completa:', response);
      this.router.navigate(['/']);
    })
  }

}

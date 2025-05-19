import { ProdutoService } from './../../services/produto.service';
import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { ProdutoLista } from '../../models/Produto';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastro',
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private produtoService: ProdutoService, private router: Router) {}

  btnAcao = "Cadastrar"
  nomeTitulo = "Cadastrar Usuários"


  criarProduto(produto: ProdutoLista) {
    this.produtoService.criarProduto(produto).subscribe(() => {
        this.router.navigate(['/'])
    })
}

}

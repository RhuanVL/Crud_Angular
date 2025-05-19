import { ProdutoLista } from './../../models/Produto';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  @Input() btnAcao!: String;
  @Input() nomeTitulo!: string;
  @Input() dadosProduto : ProdutoLista | null = null;
  @Output() onSubmit = new EventEmitter<ProdutoLista>();

  produtoForm!: FormGroup;

  ngOnInit(): void {
  console.log(3)
      this.produtoForm = new FormGroup({
          id: new FormControl(this.dadosProduto ? this.dadosProduto.id : 0 ),
          nome: new FormControl(this.dadosProduto ? this.dadosProduto.nome : ''),
          preco: new FormControl(this.dadosProduto ? this.dadosProduto.preco : ''),
          quantidade: new FormControl(this.dadosProduto ? this.dadosProduto.quantidade : '')
      });
      console.log(this.produtoForm.value)
  }

  submit(){
      console.log(this.produtoForm.value)
      this.onSubmit.emit(this.produtoForm.value);
  }

}

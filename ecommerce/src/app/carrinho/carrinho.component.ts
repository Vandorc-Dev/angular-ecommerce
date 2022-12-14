import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProduto } from '../produtos';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProduto[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService

  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal()
  }

  removerProdutoCarrinho(produtoId:  number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId)
    this.calcularTotal();
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  comprar(){
    alert("Parabéns! Você finalizou sua compra.");
    this.carrinhoService.limparCarrinho();
    //this.router.navigate([""]);
  }

}

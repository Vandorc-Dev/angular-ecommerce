import { Injectable } from '@angular/core';
import { IProduto, produtos} from './produtos';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor(
    private route: ActivatedRoute,
  ) { }

  getAll(){
    return this.produtos
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}

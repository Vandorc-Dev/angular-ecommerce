import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEnccontradoComponent } from './nao-enccontrado/nao-enccontrado.component';

const routes: Routes =[
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "", redirectTo: "produtos", pathMatch: "full"},
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: "**", component: NaoEnccontradoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppOutingModule { }

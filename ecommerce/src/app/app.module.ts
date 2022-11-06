import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppOutingModule } from './app-routing.module';
import { NaoEnccontradoComponent } from './nao-enccontrado/nao-enccontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEnccontradoComponent
  ],
  imports: [
    BrowserModule,
    AppOutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

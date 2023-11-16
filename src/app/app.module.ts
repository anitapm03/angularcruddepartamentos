import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProvider, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceDepartamentos } from './services/service.departamentos';
import { MenuComponent } from './components/menu/menu.component';
import { CreardepartamentoComponent } from './components/creardepartamento/creardepartamento.component';
import { DetalledepartamentoComponent } from './components/detalledepartamento/detalledepartamento.component';
import { EditardepartamentoComponent } from './components/editardepartamento/editardepartamento.component';
import { EliminardepartamentoComponent } from './components/eliminardepartamento/eliminardepartamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CreardepartamentoComponent,
    DetalledepartamentoComponent,
    EditardepartamentoComponent,
    EliminardepartamentoComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [appRoutingProvider, ServiceDepartamentos],
  bootstrap: [AppComponent]
})
export class AppModule { }

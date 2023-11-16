import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from './components/home/home.component';
import { CreardepartamentoComponent } from "./components/creardepartamento/creardepartamento.component";
import { DetalledepartamentoComponent } from "./components/detalledepartamento/detalledepartamento.component";
import { EditardepartamentoComponent } from "./components/editardepartamento/editardepartamento.component";
import { EliminardepartamentoComponent } from "./components/eliminardepartamento/eliminardepartamento.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "crear", component: CreardepartamentoComponent },
    { path: "detalle/:id", component: DetalledepartamentoComponent},
    { path: "editar/:id", component: EditardepartamentoComponent},
    { path: "eliminar/:id", component: EliminardepartamentoComponent}
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
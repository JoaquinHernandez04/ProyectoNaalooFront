import { Routes } from '@angular/router';
import { ClienteAltaComponent } from './cliente-alta/cliente-alta.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

export const routes: Routes = [
    { path: '', component: ClienteAltaComponent },
    { path: 'lista-clientes', component: ClienteListaComponent }
];
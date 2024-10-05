import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para el uso de [(ngModel)]

import { AppComponent } from './app.component';
import { ClienteAltaComponent } from './cliente-alta/cliente-alta.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClientesService } from './clientes.service';

import { routes } from './app.routes'; // Importa las rutas que creaste en app.routes.ts

@NgModule({
    declarations: [
        AppComponent,
        ClienteAltaComponent,
        ClienteListaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, // Importa FormsModule para manejar formularios
        RouterModule.forRoot(routes) // Configura las rutas aquí
    ],
    providers: [ClientesService],
    bootstrap: [AppComponent] // Indica el componente principal para iniciar la app
})
export class AppModule { }
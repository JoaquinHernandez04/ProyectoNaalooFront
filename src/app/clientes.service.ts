import { Injectable } from '@angular/core';

export interface Cliente {
    nombre: string;
    apellido: string;
    direccion: string;
}

@Injectable({
    providedIn: 'root'
})
export class ClientesService {

    private clientes: Cliente[] = [];

    constructor() { }

    agregarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
        console.log('Cliente guardado:', cliente);
    }

    obtenerClientes(): Cliente[] {
        console.log('Lista de clientes:', this.clientes);
        return this.clientes;
    }
}
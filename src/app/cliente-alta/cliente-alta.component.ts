import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cliente-alta',
    standalone: true, // Este componente es standalone
    templateUrl: './cliente-alta.component.html',
    styleUrls: ['./cliente-alta.component.css'],
    imports: [FormsModule, CommonModule] // Asegúrate de importar FormsModule para ngModel
})
export class ClienteAltaComponent {
    nombre: string = '';
    apellido: string = '';
    direccion: string = '';

    constructor(private supabaseService: SupabaseService, private router: Router) { }

    async guardarCliente() {
        try {
            if (this.nombre && this.apellido && this.direccion) {
                await this.supabaseService.agregarCliente({
                    nombre: this.nombre,
                    apellido: this.apellido,
                    direccion: this.direccion,
                });
                // Redirigir a la lista de clientes después de guardar
                this.router.navigate(['/lista-clientes']);
            }
        } catch (error) {
            console.error('Error al guardar cliente:', error);
        }
    }
}
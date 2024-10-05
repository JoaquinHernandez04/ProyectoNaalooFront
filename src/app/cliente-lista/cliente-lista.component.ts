import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la navegación
import { SupabaseService } from '../supabase.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cliente-lista',
    templateUrl: './cliente-lista.component.html',
    styleUrls: ['./cliente-lista.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class ClienteListaComponent implements OnInit {
    clientes: any[] = [];

    constructor(private supabaseService: SupabaseService, private router: Router) { }

    async ngOnInit() {
        try {
            this.clientes = await this.supabaseService.getClientes(); // Obtener los clientes al iniciar el componente
        } catch (error) {
            console.error('Error al cargar clientes:', error);
        }
    }

    // Método para volver al formulario de alta
    volver() {
        this.router.navigate(['/']);
    }
}


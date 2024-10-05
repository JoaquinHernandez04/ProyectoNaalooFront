import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    private supabase: SupabaseClient;

    // Usa tus valores reales de URL y API key de Supabase
    private SUPABASE_URL = 'https://gkahcetvliyvsxzxnufd.supabase.co';
    private SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYWhjZXR2bGl5dnN4enhudWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwODI0NDgsImV4cCI6MjA0MzY1ODQ0OH0.q55v1jZxINkp5mOdSdrq8AytLZ9OXUyA4Ks2pTBduhE';

    constructor() {
        this.supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);
    }

    // Método para obtener los clientes
    async getClientes() {
        const { data, error } = await this.supabase
            .from('clientes') // Nombre de la tabla
            .select('*'); // Selecciona todos los campos

        if (error) {
            console.error('Error al obtener clientes:', error);
            throw error;
        }

        return data; // Devuelve los datos de los clientes
    }

    // Método para agregar un cliente
    async agregarCliente(cliente: { nombre: string; apellido: string; direccion: string }) {
        const { data, error } = await this.supabase
            .from('clientes') // Nombre de la tabla
            .insert([cliente]);

        if (error) {
            console.error('Error al agregar cliente:', error);
            throw error;
        }

        return data;
    }
}

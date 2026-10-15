import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Proyecto } from '../../models/proyecto';

@Injectable ({providedIn: 'root'})
export class ProyectoService {
    private url = 'http://localhost:3001/proyectos';
    private http: HttpClient = inject (HttpClient);

    obtenerProyectos(){
        return this.http.get<Proyecto[]>(this.url)
    }

    obtenerProyectoId(id: string){
        return this.http.get<Proyecto>(`${this.url}/${id}`)
    }
}

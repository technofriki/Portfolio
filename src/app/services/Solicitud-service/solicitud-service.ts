import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { Observable } from 'rxjs';

@Injectable ({providedIn: 'root'})
export class SolicitudService {
    private url = 'http://localhost:3000/solicitudes';
    private http: HttpClient = inject (HttpClient);

    obtenerSolicitudes(){
        return this.http.get<Solicitud[]>(this.url)
    }

    obtenerSolicitudId(id: string){
        return this.http.get<Solicitud>(`${this.url}/${id}`)
    }

    crearSolicitud(solicitud: Solicitud): Observable<Solicitud>{
        return this.http.post<Solicitud>(this.url, solicitud)
    }

    editarSolicitud(id: string, solicitud: Solicitud): Observable<Solicitud>{
        return this.http.put<Solicitud>(`${this.url}/${id}`, solicitud)
    }

    eliminarSolicitud(id: string){
        return this.http.delete<void>(`${this.url}/${id}`)
    }

}

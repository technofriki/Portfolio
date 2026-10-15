import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProyectoDetalle } from './pages/proyecto-detalle/proyecto-detalle';
import { Proyectos } from './pages/proyectos/proyectos';
import { SolicitudForm } from './pages/solicitud-form/solicitud-form';
import { Solicitudes } from './pages/solicitudes/solicitudes';
import { SolicitudDetalle } from './pages/solicitud-detalle/solicitud-detalle';

export const routes: Routes = [
    {path: '', component: Home},

    {path: 'proyectos', component: Proyectos},
    {path: 'proyectos/:id', component: ProyectoDetalle},

    {path: 'solicitud-form', component: SolicitudForm},
    {path: 'solicitud-form/:id', component: SolicitudForm},

    {path: 'solicitudes', component: Solicitudes},
    {path: 'solicitudes/:id', component: SolicitudDetalle}

];

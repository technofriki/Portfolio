export interface Solicitud{
    id? : string;
    nombreSolicitante: string;
    email: string;
    tipoProyecto: string;
    descripcion: string;
    presupuesto: number;
    fechaEstimada: string;
}
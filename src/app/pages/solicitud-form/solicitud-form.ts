import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudService } from '../../services/Solicitud-service/solicitud-service';
import { ActivatedRoute, Router } from '@angular/router';
import { email } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-solicitud-form',
  styleUrl: './solicitud-form.css',
  templateUrl: './solicitud-form.html',
})
export class SolicitudForm implements OnInit{
  
  private fb = inject (FormBuilder);
  private service = inject (SolicitudService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  esEdicion = signal (false);
  error = signal<string | null>(null);
  id: string | null = null;
  
  form = this.fb.nonNullable.group({
    nombreSolicitante:['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email:['', Validators.required, Validators.email],
    tipoProyecto:['', Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    descripcion: ['', Validators.required, Validators.minLength(3), Validators.maxLength(500)],
    presupuesto: [0, Validators.required],
    fechaEstimada: ['', Validators.required]
  })
  
  get c(){
    return this.form.controls;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id){
      this.esEdicion.set(true);

      this.service.obtenerSolicitudId(this.id).subscribe({
        next: (data) => this.form.patchValue(data),
        error: () => this.error.set('No pudo encontrarse la solicitud'),
      })
    }
  }

  sumbit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    const proyecto = this.form.getRawValue();
    const solicitud = this.esEdicion() ?
    this.service.editarSolicitud(this.id!, proyecto)
    : this.service.crearSolicitud(proyecto);
  }
}

import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Proyecto } from '../../models/proyecto';
import { ProyectoService } from '../../services/Proyecto-service/proyecto-service';

@Component({
  imports: [RouterLink],
  selector: 'app-proyecto-detalle',
  styleUrl: './proyecto-detalle.css',
  templateUrl: './proyecto-detalle.html',
})
export class ProyectoDetalle implements OnInit {
  proyectoDetalle = signal<Proyecto | null>(null);
  error = signal<string | null>(null);

  private service = inject(ProyectoService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    
    this.service.obtenerProyectoId(id).subscribe({
      next: (data) => this.proyectoDetalle.set(data),
      error: () => this.error.set('Proyecto no encontrado'),
    })
  }
}

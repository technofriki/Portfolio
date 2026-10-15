import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Proyecto } from '../../models/proyecto';
import { ProyectoService } from '../../services/Proyecto-service/proyecto-service';

@Component({
  imports: [RouterLink],
  selector: 'app-proyectos',
  styleUrl: './proyectos.css',
  templateUrl: './proyectos.html',
})
export class Proyectos implements OnInit{

  proyectos = signal<Proyecto[]>([]);

  private service = inject (ProyectoService);

  ngOnInit(): void {
    this.service.obtenerProyectos().subscribe({
      next: (data) => {this.proyectos.set(data); console.log(data)},
      error: () => alert ('Proyectos no encontrados'),
    })
  }
}

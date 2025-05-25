import { Component, EventEmitter, Output } from '@angular/core';
import { Plato } from '../models/plato.models';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html'
})
export class MenuFormComponent {
  @Output() nuevoPlato = new EventEmitter<Plato>();

  nombre = '';
  tipo: Plato['tipo'] = 'Plato Principal';
  descripcion = '';
  precio = 0;
  imagenUrl = '';
  categoria = '';
  disponible = true;

  agregarPlato() {
    const plato: Plato = {
      id: Date.now(),
      nombre: this.nombre,
      tipo: this.tipo,
      descripcion: this.descripcion,
      precio: this.precio,
      imagenUrl: this.imagenUrl || undefined,
      categoria: this.categoria || undefined,
      disponible: this.disponible
    };
    this.nuevoPlato.emit(plato);

    // Limpiar formulario
    this.nombre = '';
    this.tipo = 'Plato Principal';
    this.descripcion = '';
    this.precio = 0;
    this.imagenUrl = '';
    this.categoria = '';
    this.disponible = true;
  }
}

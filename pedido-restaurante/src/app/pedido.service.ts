import { Injectable } from '@angular/core';
import { Plato } from './models/plato.models';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private platos: Plato[] = [];

  constructor() { }

  agregarPlato(plato: Plato) {
    this.platos.push(plato);
  }

  obtenerPlatos(): Plato[] {
    return [...this.platos];
  }

  limpiarPedido() {
    this.platos = [];
  }
}
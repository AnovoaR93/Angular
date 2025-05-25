import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Plato } from '../models/plato.models';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {
  platos: (Plato & { consumido?: boolean })[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.platos = this.pedidoService.obtenerPlatos().map(plato => ({ ...plato, consumido: false }));
  }

  marcarComoConsumido(index: number) {
    this.platos[index].consumido = true;
  }

  eliminarPlato(index: number) {
    this.platos.splice(index, 1);
    // Si quieres que también se elimine del servicio:
    // this.pedidoService.eliminarPlatoPorId(this.platos[index].id);
  }
}
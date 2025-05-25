import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Plato } from '../models/plato.models';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  total: number = 0;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.calcularTotal();
  }

  calcularTotal() {
    const platos: Plato[] = this.pedidoService.obtenerPlatos();
    this.total = platos.reduce((sum, plato) => sum + plato.precio, 0);
  }
}

import { Component } from '@angular/core';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { CuentaComponent } from './cuenta/cuenta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuFormComponent, PedidoListComponent, CuentaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pedido-restaurante';

  onNuevoPlato(plato: any) {
    // Your logic here
  }
}

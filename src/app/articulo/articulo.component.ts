import { Component, Input } from '@angular/core';
import { iArticulo } from '../app.component';

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent {
  @Input() p_item!: iArticulo;

}

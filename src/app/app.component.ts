import { Component } from '@angular/core';
import { ArticuloComponent } from "./articulo/articulo.component";
import { FormsModule } from '@angular/forms';
import * as articulos_archivo from './articulos.json'

export interface iArticulo {
  imagen: string,
  titulo: string,
  autor: string,
  texto: string,
  link: string
}

@Component({
  selector: 'app-root',
  imports: [ArticuloComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ArticleDemo2';
  public filtro: string = "";
  // public articulos: iArticulo[] = articulos_archivo ?? [];
  public articulos: iArticulo[] = [{ imagen: "articleThumb1.jpg", titulo: "Rabbit R1 no longer relevant", autor: "Posted by John Smith on Feb 20 2024", texto: "The AI powered device that was later discovered to just be a weirdly shaped Android device is no longer relevant today.", link: "article1.html" }, { imagen: "articleThumb2.jpg", titulo: "Microsoft makes a new type of material", autor: "Posted by Mike Power on Feb 20 2024", texto: "The world’s first topoconductor.      This revolutionary class of materials enables us to create topological superconductivity, a new state of matter that previously existed only in theory.", link: "article1.html" }, { imagen: "articleThumb3.jpg", titulo: "OnePlus makes a typo", autor: "Posted by Deirdre O'Donnell on Feb 20 2024", texto: "OnePlus has now admitted that its latest flagship smartwatch has been released with      a by-now famous typo on one of its surfaces.", link: "article1.html" }, { imagen: "articleThumb4.jpg", titulo: "A fourth news article should be here", autor: "Posted by Weran Outofideas on Feb 22 2024", texto: "You shouldn't be reading this part right here, stop. Why are still reading it?", link: "article1.html" }]

  articulosFiltrados() {
    return this.articulos.filter(item => item.texto.toLowerCase().includes(this.filtro) || item.titulo.toLowerCase().includes(this.filtro) || item.autor.toLowerCase().includes(this.filtro))
  }

}

import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo.model';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {

  ofertas: Articulo[] = [
    new Articulo('Producto 1','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae aperiam laborum odit minima quisquam suscipit rerum?','https://source.unsplash.com/user/edufrojo/1600x901'),
    new Articulo('Producto 2','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae aperiam laborum odit minima quisquam suscipit rerum?','https://source.unsplash.com/user/edufrojo/1600x902'),
    new Articulo('Producto 3','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae aperiam laborum odit minima quisquam suscipit rerum?','https://source.unsplash.com/user/edufrojo/1600x903'),
    new Articulo('Producto 4','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae aperiam laborum odit minima quisquam suscipit rerum?','https://source.unsplash.com/user/edufrojo/1600x904'),
    new Articulo('Producto 5','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae aperiam laborum odit minima quisquam suscipit rerum?','https://source.unsplash.com/user/edufrojo/1600x905'),
    new Articulo('Producto 6','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae aperiam laborum odit minima quisquam suscipit rerum?','https://source.unsplash.com/user/edufrojo/1600x906'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

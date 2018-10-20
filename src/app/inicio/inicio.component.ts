import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  generos:any = [
  		{id: 1, name:'Comedia', status: true},
  		{id: 2, name:'Romance', status: true},
  		{id: 3, name:'Drama', status: true},
  		{id: 4, name:'Infantil', status: true},
  		{id: 5, name:'Anime', status: true},
  		{id: 6, name:'Estrenos', status: true}
  ];
  constructor() { }

  ngOnInit() {
  }

}

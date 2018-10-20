import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  id = 0;
  name = '' ;
  constructor(private route:ActivatedRoute) { 
  this.id = this.route.snapshot.params['id'];
  this.name = this.route.snapshot.params['name'];

  }
	listado:any = [
  		{id: 1, name:'Comedia', status: true},
  		{id: 1, name:'Comedia', status: true},
  		{id: 1, name:'Comedia', status: true},
  		{id: 2, name:'Romance', status: true},
  		{id: 2, name:'Romance', status: true},
  		{id: 2, name:'Romance', status: true},
  		{id: 3, name:'Drama', status: true},
  		{id: 3, name:'Drama', status: true},
  		{id: 3, name:'Drama', status: true},
  		{id: 4, name:'Infantil', status: true},
  		{id: 4, name:'Infantil', status: true},
  		{id: 4, name:'Infantil', status: true},,
  		{id: 5, name:'Anime', status: true},
  		{id: 5, name:'Anime', status: true},
  		{id: 5, name:'Anime', status: true},
  		{id: 6, name:'Estrenos', status: true},
  		{id: 6, name:'Estrenos', status: true},
  		{id: 6, name:'Estrenos', status: true}
  ];

  constructor() { }

  ngOnInit() {
  }

}

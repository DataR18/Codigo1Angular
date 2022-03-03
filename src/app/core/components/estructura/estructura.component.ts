import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  IsUsuario=true
  //Arreglo
  personas: Usuario[]=[
    {id:1, nombre:"Juan", apellido: "Valdez"},
    {id:2, nombre:"Jose", apellido: "Mejia"},
    {id:3, nombre:"Manuel", apellido: "Gastrum"},
    {id:4, nombre:"Jorge", apellido: "Roman"},
    {id:5, nombre:"Isabel", apellido: "Alvarez"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

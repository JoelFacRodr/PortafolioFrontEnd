import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Proyects } from 'src/app/model/proyects';
import { ProyectsService } from 'src/app/service/proyects.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {
  proyecto : Proyects = null;
  constructor(private proyectoS: ProyectsService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activateRouter.snapshot.params['id'];
  this.proyectoS.detail(id).subscribe(data=>{
    this.proyecto = data;
  },err=>{
    alert("Error al modificar proyecto");
    this.router.navigate(['']);
  })
  }

  onUpdate():void{
    const id= this.activateRouter.snapshot.params['id'];
    this.proyectoS.update(id,this.proyecto).subscribe(data =>{
      this.router.navigate(['']);
    },err=>{
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }

  cancelar():void{
    this.proyecto = null;
    this.router.navigate(['']);
  }
  }
  


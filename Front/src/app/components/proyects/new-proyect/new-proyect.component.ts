import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyects } from 'src/app/model/proyects';
import { ProyectsService } from 'src/app/service/proyects.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {
  nombreP: string;
  descriptionP:string;
  periodoF: Date;
  periodoI: Date;
  link:string;

  constructor(private proyectoS: ProyectsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyecto = new Proyects(this.nombreP, this.descriptionP, this.periodoF, this.periodoI, this.link);
    console.log(proyecto)
    this.proyectoS.save(proyecto).subscribe(data =>{
      alert('proyecto se agrego correctamente');
      this.router.navigate(['']);
    }, err=>{
      alert("fallo al agregar proyecto");
      this.router.navigate(['']);
    })
  }
  cancelar():void{
    this.router.navigate(['']);
  }
}

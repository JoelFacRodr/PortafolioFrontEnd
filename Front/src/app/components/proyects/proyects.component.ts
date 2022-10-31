import { Component, OnInit } from '@angular/core';
import { Proyects } from 'src/app/model/proyects';
import { ProyectsService } from 'src/app/service/proyects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyecto: Proyects[] = [];
  constructor(private proyectoS: ProyectsService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged= false;
    }
  }

  cargarProyecto():void{
    this.proyectoS.lista().subscribe(data => {
      this.proyecto = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectoS.delete(id).subscribe(data =>{
        this.cargarProyecto();
      }, err=>{
        alert("Error al eliminar proyecto");
      })
    }
  }

}

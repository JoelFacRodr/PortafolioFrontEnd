import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE : string = '';
  tituloP: string = '';
  periodoI: Date ;
  periodoF: Date ;

  disable = true;

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
 onCreate():void{
  const expe = new Experiencia(this.nombreE, this.descripcionE,this.periodoF,this.periodoI,this.tituloP);
  this.sExperiencia.save(expe).subscribe(data => {
    alert("Experiencia Añadida");
    this.router.navigate(['']);
}, err =>{
  alert("Fallo al agregar experiencia");
  this.router.navigate(['']);
})
 }

 check():void{
 if(!this.disable){
  this.disable = false;
  console.log(this.disable,"checkkk")
 }
 }
   
 cancelar():void{
  this.router.navigate(['']);
}
}

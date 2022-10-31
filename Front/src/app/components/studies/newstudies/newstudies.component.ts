import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-newstudies',
  templateUrl: './newstudies.component.html',
  styleUrls: ['./newstudies.component.css']
})
export class NewstudiesComponent implements OnInit {
  nombreE: string;
  descripcionE:string;
  periodoF: Date;
  periodoI:Date;

  constructor(private educacionS: EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.periodoF,this.periodoI);
    this.educacionS.save(educacion).subscribe(data =>{
      alert('Estudio se agrego correctamente');
      this.router.navigate(['']);
    }, err=>{
      alert("fallo al agregar estudio");
      this.router.navigate(['']);
    })
  }

  
  
  cancelar():void{
    this.router.navigate(['']);
  }
}

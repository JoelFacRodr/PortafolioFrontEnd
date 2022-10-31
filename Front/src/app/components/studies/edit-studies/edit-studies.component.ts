import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-studies',
  templateUrl: './edit-studies.component.html',
  styleUrls: ['./edit-studies.component.css']
})
export class EditStudiesComponent implements OnInit {
  educacion: Educacion = null;
  constructor(private educacionS: EducacionService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  const id= this.activateRouter.snapshot.params['id'];
  this.educacionS.detail(id).subscribe(data=>{
    this.educacion = data;
  },err=>{
    alert("Error al modificar estudio");
    this.router.navigate(['']);
  })
}

onUpdate():void{
  const id= this.activateRouter.snapshot.params['id'];
  this.educacionS.update(id,this.educacion).subscribe(data =>{
    this.router.navigate(['']);
  },err=>{
    alert("Error al modificar el estudio");
    this.router.navigate(['']);
  })
}

cancelar():void{
  this.educacion = null;
  this.router.navigate(['']);
}
}



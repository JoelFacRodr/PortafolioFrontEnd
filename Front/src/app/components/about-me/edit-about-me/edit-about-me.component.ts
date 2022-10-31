import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {
 persona: persona = null ;
 showSpinner=false;
  constructor(private personaS: PersonaService, private activateRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {

    const id= this.activateRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(data=>{
      this.persona = data;
    },err=>{
      alert("Error al modificar persona");
      this.router.navigate(['']);
    })
   
}

loadData(){
  this.showSpinner = true;
  setTimeout(()=>{
    this.showSpinner = false;
  },3500)
}
  
onUpdate():void{  
  const id= this.activateRouter.snapshot.params['id'];
  this.persona.img = this.imageService.url;
  this.personaS.update(id,this.persona).subscribe(data =>{
    this.router.navigate(['']);
  },err=>{
    alert("Error al modificar el persona");
    this.router.navigate(['']);
  })
}

uploadImage($event:any){
const id = this.activateRouter.snapshot.params['id'];
const name = "perfil_" + id;
this.imageService.uploadImage($event, name)
}

cancelar():void{
  this.persona = null;
  this.router.navigate(['']);
}
}



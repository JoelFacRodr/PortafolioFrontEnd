import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreSkill: string = '';
  porcSkill: number = 0;
  constructor(private sSkill: SkillService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Skill(this.nombreSkill, this.porcSkill);
    this.sSkill.save(skill).subscribe(data => {
      alert("Skill Añadida");
      this.router.navigate(['']);
  }, err =>{
    alert("Fallo al agregar skill");
    this.router.navigate(['']);
  })
   }

   cancelar():void{
    this.router.navigate(['']);
  }

}

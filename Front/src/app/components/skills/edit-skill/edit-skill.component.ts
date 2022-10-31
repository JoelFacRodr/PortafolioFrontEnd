import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skillEdit : Skill = null;
  constructor(private sSkill: SkillService,private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activateRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(data=>{
      this.skillEdit = data;
    },err=>{
      alert("Error al modificar skill1");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id= this.activateRouter.snapshot.params['id'];
    this.sSkill.update(id,this.skillEdit).subscribe(data =>{
      this.router.navigate(['']);
    },err=>{
      alert("Error al modificar Skill");
      this.router.navigate(['']);
    })
  }
  cancelar():void{
    this.skillEdit = null;
    this.router.navigate(['']);
  }

}

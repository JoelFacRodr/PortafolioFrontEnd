import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutMeComponent } from './components/about-me/edit-about-me/edit-about-me.component';
import { EditBannerComponent } from './components/banner/edit-banner/edit-banner.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditStudiesComponent } from './components/studies/edit-studies/edit-studies.component';
import { NewstudiesComponent } from './components/studies/newstudies/newstudies.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LogInComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},  
  {path:'editexp/:id',component: EditExperienciaComponent},
  {path:'nuevaedu',component: NewstudiesComponent},
  {path:'editedu/:id',component: EditStudiesComponent},
  {path:'editacercade/:id',component: EditAboutMeComponent},
  {path:'nuevaskill',component: NewSkillComponent},
  {path:'skillEdit/:id',component:EditSkillComponent},
  {path:'nuevopro',component: NewProyectComponent},
  {path:'editpro/:id',component: EditProyectComponent},
  {path:'editbanner/:id',component: EditBannerComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

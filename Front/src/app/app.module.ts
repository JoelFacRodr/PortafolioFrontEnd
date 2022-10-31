import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component'; 
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experience/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia.component';
import { NewstudiesComponent } from './components/studies/newstudies/newstudies.component';
import { EditStudiesComponent } from './components/studies/edit-studies/edit-studies.component';
import { EditAboutMeComponent } from './components/about-me/edit-about-me/edit-about-me.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditBannerComponent } from './components/banner/edit-banner/edit-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    StudiesComponent,
    SkillsComponent,
    ProyectsComponent,
    FooterComponent,
    HomeComponent,
    LogInComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewstudiesComponent,
    EditStudiesComponent,
    EditAboutMeComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewProyectComponent,
    EditProyectComponent,
    EditBannerComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule ,
    MatProgressSpinnerModule,
    NgbModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

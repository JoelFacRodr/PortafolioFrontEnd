import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { ImageService } from 'src/app/service/image.service';
import { ImagenbannerService } from 'src/app/service/imagenbanner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
banner: Banner = null;
showSpinner=false;
  constructor(private bannerS: BannerService, private activateRouter: ActivatedRoute, private router: Router, public imagenbannerService: ImagenbannerService) { }

  ngOnInit(): void {

    const id= this.activateRouter.snapshot.params['id'];
    this.bannerS.detail(id).subscribe(data=>{
      this.banner = data;
    },err=>{
      alert("Error al iniciar Banner");
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
  this.banner.img = this.imagenbannerService.url;
  this.bannerS.update(id,this.banner).subscribe(data =>{
    this.router.navigate(['']);
  },err=>{
    alert("Error al modificar el banner");
    this.router.navigate(['']);
  })
}

uploadImage($event:any){
const id = this.activateRouter.snapshot.params['id'];
const name = "banner_" + id;
this.imagenbannerService.uploadImage($event, name)
}
}



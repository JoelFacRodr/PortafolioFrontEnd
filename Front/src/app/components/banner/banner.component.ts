import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isLogged = false;
  banner: Banner;
  constructor(public BannerService: BannerService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarBanner();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }
  }

  cargarBanner(){
    this.BannerService.detail(1).subscribe(data=>
     {this.banner = data}
      )
  }

}

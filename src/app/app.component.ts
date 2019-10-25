  import { Component, OnInit } from '@angular/core';
  import {Router} from '@angular/router';
  import {CatalogueService} from './services/catalogue.service';
  import {AuthenticationService} from './services/authentication.service';


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit{
     city;
     currentCity;

    constructor(
      public catService:CatalogueService,
      private router:Router,
      public authService:AuthenticationService
    ){}

    ngOnInit(): void {
        this.getCity();
      }

      private getCity() {
        this.catService.getResource(this.catService.host+"/city")
          .subscribe(data=>{
            this.city=data;
          },err=>{
            console.log(err);
          })
      }

      getProductsByCat(c) {
        this.currentCity=c;
        this.router.navigateByUrl('/hotel/2/'+c.id);
      }

      onSelectedProducts() {
        this.currentCity=undefined;
        this.router.navigateByUrl("/hotel/1/0");
      }

      onProductsPromo() {
        this.currentCity=undefined;
        this.router.navigateByUrl("/hotel/3/0");
      }

      onProductsDispo() {
        this.currentCity=undefined;
        this.router.navigateByUrl("/hotel/4/0");
      }

       onLogin() {
          this.router.navigateByUrl('/login');
        }

        onLogout() {
          //this.caddyService.emptyCaddy();
          this.authService.logout();
          this.router.navigateByUrl('/login');
        }

  }

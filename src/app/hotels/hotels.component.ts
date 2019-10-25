    import { Component, OnInit } from '@angular/core';
    import {CatalogueService} from '../services/catalogue.service';
    import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
    import {HttpEventType, HttpResponse} from '@angular/common/http';
    import {Hotel} from '../model/hotel.model';
    import {AuthenticationService} from '../services/authentication.service';


    @Component({
      selector: 'app-hotels',
      templateUrl: './hotels.component.html',
      styleUrls: ['./hotels.component.css']
    })
      export class HotelsComponent implements OnInit {
         hotels;
         editPhoto: boolean;
         currentHotel: any;
         selectedFiles;
         progress: number;
         currentFileUpload: any;
         title:string;
         currentRequest:string;
        private currentTime: number=0;

        constructor(
          public catService:CatalogueService,
          private route:ActivatedRoute,
          private router:Router,
          private authService:AuthenticationService
        ) {}

        ngOnInit() {
          this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd ) {
              let url = val.url;
              let h1=this.route.snapshot.params.h1;
              if(h1==1){
                this.title="Sélection";
                this.currentRequest='/hotel/search/selectedHotel';
                this.getProducts(this.currentRequest);
              }
              else if (h1==2){
                let idCat=this.route.snapshot.params.h2;
                this.title=" Hotel de cette ville "+idCat;
                this.currentRequest='/city/'+idCat+'/hotel';
                this.getProducts(this.currentRequest);
              }
              else if (h1==3){
                this.title="Hotel en promotion";
                this.currentRequest='/hotel/search/promoHotel';
                this.getProducts(this.currentRequest);
              }
              else if (h1==4){
                this.title="Hotels Disponibles";
                this.currentRequest='/hotel/search/dispoHotel';
                this.getProducts(this.currentRequest);
              }
              else if (h1==5){
                this.title="Recherche..";
                this.title="Hotels Disponibles";
                this.currentRequest='/hotel/search/dispoHotel';
                this.getProducts(this.currentRequest);
              }

            }
          });
          let h1=this.route.snapshot.params.h1;
          if(h1==1){
            this.currentRequest='/hotel/search/selectedHotel';
            this.getProducts(this.currentRequest);
          }
        }

        private getProducts(url) {
          this.catService.getResource(this.catService.host+url)
            .subscribe(data=>{
              this.hotels=data;
            },err=>{
              console.log(err);
            })
        }
        private refreshUpdatedProduct() {
          this.catService.getResource(this.currentHotel._links.self.href)
            .subscribe(data=>{
              console.log(data);
              //this.currentHotel.photoName=data['photoName'];
            },err=>{
              console.log(err);
            })
        }

        getTS() {
          return this.currentTime;
        }

        onSelectedFile(event) {
          this.selectedFiles=event.target.files;
        }

        onProductDetails(h) {
          this.router.navigateByUrl("/hotel/"+h.id);
        }
    }

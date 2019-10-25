  import { Component, OnInit } from '@angular/core';
  import {ActivatedRoute, Router} from '@angular/router';
  import {HttpEventType, HttpResponse} from '../../../node_modules/@angular/common/http';
  import {Hotel} from '../model/hotel.model';
  import {CatalogueService} from '../services/catalogue.service';


  @Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.css']
  })
    export class HotelComponent implements OnInit {
      currentHotel;
      selectedFiles;
      progress: number;
      currentFileUpload: any;
      private currentTime: number;
      private editPhoto: boolean;
      private mode: number=0;

      constructor(
        private router:Router,
        private route:ActivatedRoute,
        public catService:CatalogueService
      ) {}

      ngOnInit() {
        let id=this.route.snapshot.params.id;
        this.catService.getResource(this.catService.host+"/hotel/"+id)
          .subscribe(data=>{
            this.currentHotel=data;
          },err=>{
            console.log(err);
          })
      }

      onSelectedFile(event) {
        this.selectedFiles=event.target.files;
      }

      onEditHotel() {
        this.mode=1;
      }

     onUpdateHotel(data) {
        let url=this.currentHotel._links.self.href;
        this.catService.patchResource(url,data)
          .subscribe(d=>{
            this.currentHotel=d;
            this.mode=0;
          },err=>{
            console.log(err);
          })
    }
  }

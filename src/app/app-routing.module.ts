import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';

  const routes: Routes = [
    {path:'hotels/:h1/:h2',component:HotelsComponent},
    {path:'',redirectTo:'hotel/1/0',pathMatch:'full'},
    {path:'hotel/:id', component:HotelComponent},
    {path:'login', component:LoginComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }

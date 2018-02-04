import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TbytComponent } from './tbyt/tbyt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StarsComponent } from './random/stars/stars.component';
import { CloudsComponent } from './random/clouds/clouds.component';
import { RouterModule, Routes } from "@angular/router";
import { SunsetComponent } from './random/sunset/sunset.component';
import { HalvedComponent } from './rows/halved/halved.component';
import { OrowComponent } from './rows/orow/orow.component';
import { PictureComponent } from './rows/picture/picture.component';
import { PractiseComponent } from './rows/practise/practise.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeTwoComponent } from './rows/home-two/home-two.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { KnowroamingComponent } from './rows/professional/knowroaming/knowroaming.component';
import { FirepowerComponent } from './rows/professional/firepower/firepower.component';
import { LastcallComponent } from './rows/professional/lastcall/lastcall.component';
import { ResumeComponent } from './rows/professional/resume/resume.component';
import { HomeOneComponent } from './rows/home-one/home-one.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TripletButComponent } from './rows/triplet-but/triplet-but.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
//  { path: 'stars', component: StarsComponent },
///  { path: 'pic', component: PictureComponent },
//  { path: 'picc', component: PractiseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TbytComponent,
    NavbarComponent,
    StarsComponent,
    CloudsComponent,
    SunsetComponent,
    HalvedComponent,
    OrowComponent,
    PictureComponent,
    PractiseComponent,
    HomeComponent,
    HomeTwoComponent,
    ProfessionalComponent,
    KnowroamingComponent,
    FirepowerComponent,
    LastcallComponent,
    ResumeComponent,
    HomeOneComponent,
    TripletButComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ButtonsModule.forRoot(),
    BrowserModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

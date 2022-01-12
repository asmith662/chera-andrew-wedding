import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'schedule',  component: ScheduleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PhotosComponent,
    ContactComponent,
    OurStoryComponent,
    ScheduleComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

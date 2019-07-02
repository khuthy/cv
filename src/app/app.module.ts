import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ResumeComponent } from './resume/resume.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FormsModule } from '@angular/forms';
  import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    ResumeComponent,
    TopnavComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ResumeComponent},
      {path: 'contactMe', component: ContactMeComponent},
      {path: 'topnav', component: TopnavComponent}
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

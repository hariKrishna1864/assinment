import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientheaderComponent } from './patientheader/patientheader.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SearchPipe } from './search.pipe';

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PatientComponent,
    PatientheaderComponent,
    SideNavComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminrouteComponent } from './adminroute/adminroute.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HeaderComponent } from './header/header.component';
import {AuthguardServiceService} from './authguard-service.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminhomeComponent,
    AdminrouteComponent,
    AdminComponent,
    ProfileComponent,
    UserComponent,
    UserhomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule,
    HttpClientModule,
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

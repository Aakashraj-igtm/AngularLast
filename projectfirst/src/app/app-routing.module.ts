import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminhomeComponent} from './adminhome/adminhome.component'
import {AdminrouteComponent} from './adminroute/adminroute.component'
import {AdminComponent} from './admin/admin.component'
import {ProfileComponent} from './profile/profile.component'
import {UserhomeComponent} from './userhome/userhome.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminGuard } from './admin.guard';
import {AuthguardServiceService} from './authguard-service.service';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {path :'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:"admin",component:AdminhomeComponent,canActivate:[AdminGuard]},
  {path:"admin/route",component:AdminrouteComponent,canActivate:[AdminGuard]},
  {path:"user/profile",component:ProfileComponent,canActivate:[AuthenticationGuard]},
  {path:"userhome",component:UserhomeComponent,canActivate:[AuthenticationGuard]},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

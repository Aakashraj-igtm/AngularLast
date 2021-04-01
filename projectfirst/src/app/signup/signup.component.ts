import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes ,Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   emailId:string;
   customerName:string;
   mobileNumber:string;
   password:string;
  constructor(private http:HttpClient,private router:Router) { }
  Signup()
   {
    var obs = this.http.post("http://localhost:8080/user/signup",{customerName:this.customerName,emailId:this.emailId,mobileNumber:this.mobileNumber,password:this.password})
    obs.subscribe((res)=>{
      if(res)
      {
        this.router.navigate(['/login'])
      }
    })
   }
  ngOnInit(): void {
  }

}

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
   confirmpassword:string;
  constructor(private http:HttpClient,private router:Router) { }
  Signup()
   {
     var regex=/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
     var phn=/^[6-9][0-9]{9}/;
     if(!(regex.test(this.emailId)))
     {
       alert('Email validation failed');
       window.location.reload();
       return;
     }
     if(!(phn.test(this.mobileNumber)))
     {
       alert('Mobile validation failed');
       window.location.reload();
       return;
     }


     if(!(this.password===this.confirmpassword))
     {
       alert('Passwords didnot match');
       window.location.reload();
     }
    var obs = this.http.post("http://localhost:8080/signup",{customerName:this.customerName,emailId:this.emailId,mobileNumber:this.mobileNumber,password:this.password})
    obs.subscribe((res)=>{
      if(res)
      {
        alert('User Registered')
        this.router.navigate(['/login'])
      }
      else{
        alert('Unsuccessful')
        window.location.reload();
      }
    })
   }
  ngOnInit(): void {
  }

}

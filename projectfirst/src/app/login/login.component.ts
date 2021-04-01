import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes ,Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   
  emailId:string;
  password:string;
  constructor(private http:HttpClient,private router:Router) { }

  postLogin()
  {
    var obs = this.http.post("http://localhost:8080/user/login",{emailId:this.emailId,password:this.password})
    obs.subscribe((res)=>{
      if(res)
      {
        console.log("successful");
        this.router.navigate(['/admin/route']);

      }
      else{
        console.log(" un  ")
      }
    })
  }
  ngOnInit(): void {
  }

}

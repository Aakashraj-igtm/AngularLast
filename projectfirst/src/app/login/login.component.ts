import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes ,Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginstatus:string='0';
  emailId!: string;
  password!: string;
  constructor(private http:HttpClient,private router:Router) { }

  postLogin()
  {
    if(this.emailId=='admin'&&this.password=='admin')
    {
      localStorage.setItem('AdminUse','1');
      this.router.navigate(['admin']);
    }
    else{
    var obs = this.http.post("http://localhost:8080/login",{emailId:this.emailId,password:this.password})
    obs.subscribe((res)=>{
      if(res)
      {
        this.loginstatus='1';
        localStorage.setItem('emaildetails',this.emailId);
        
        console.log("successful");
      }
      else{
        this.loginstatus='0';
        console.log(" unsuccessful");
        alert('Invalid credentials');
        //window.location.reload();
      }
    })
    localStorage.setItem('SessionUse',this.loginstatus);
    this.router.navigate(['userhome'])
  }
  }
  ngOnInit(): void {
  }

}
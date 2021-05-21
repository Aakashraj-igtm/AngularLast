import { Component, OnInit } from '@angular/core';
import { Router,RouterModule, Routes } from '@angular/router';
import { logging } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  check!:any;
  data:any=[]
  customerName!:string;
  emailId!:string;
  mobileNumber!:number;
  password!:string;
  customerId!:string;
  status!:string;

  constructor(private http:HttpClient,private router:Router) {
    
   }

  logOut()
  {
    //localStorage.clear();
    localStorage.setItem('SessionUse','0');
    this.router.navigate(['/login']);
  }

  updateclick()
  {
    var obs = this.http.put("http://localhost:8080/editCustomer/"+this.customerId,{customerName:this.customerName,emailId:this.emailId,mobileNumber:this.mobileNumber,status:this.status,password:this.password})
    obs.subscribe((response)=>{
      localStorage.setItem('emaildetails',this.emailId);
     console.log(response)
     alert('User Updated');
     window.location.reload()
    })

  }

  ngOnInit(): void {
    /*let obs1=this.http.get('http://localhost:8080/cookie/cookies',{observe:'response'});
    obs1.subscribe(
      (response)=>{
       this.check=response.body;
      console.log(this.check);
      });*/
      let data=localStorage.getItem('emaildetails');
      console.log(data);
    let  obs= this.http.get('http://localhost:8080/getID/'+data,{observe:'response'});
    obs.subscribe(
      (response)=>{
        this.data = response.body[0];
        console.log(this.data);
        this.customerId=this.data.customerId;
        this.status=this.data.status;
        console.log(this.customerId)
      
      });
   
   
  }

}

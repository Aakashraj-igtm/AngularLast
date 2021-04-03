import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  data1:any=[];
  data:any=[
    {sno:"1",name:"likhith",role:"likhith@gmail.com"},
    {sno:"2",name:"Ganesh",role:"ganesh@gmail.com"},
    {sno:"3",name:"Mahesh",role:"mahesh@gmail.com"}
  ]
  username!:string; 
  checkname!:string;
  email!:string;
  emailId!:string;
  employeeId!:string;
  length!:number;
  password!:string;
  mobileNumber!:string;
  vehicleModel!:string;
  vehicleNumber!:string;
  check:Number=1;
  public t1:boolean;
 public t2:boolean
  constructor(private router:Router,private httpClient:HttpClient) { 
    this.t1=false;
    this.t2=false;
    this.checkname="Driver";
    let  obs= this.httpClient.get('http://localhost:8080/admin/getEmployee',{observe:'response'});
      obs.subscribe((response)=>(this.data1=(response.body)));
    let  obs1= this.httpClient.get('http://localhost:8080/admin/getEmployee',{observe:'response'});
      this.length=this.data1.length;
      this.data1.push()
  }
  ngOnInit(): void {
    
      
  }
  toggle(val:any)
  {
    console.log(val);
  }
  
  toggle1()
{
  this.t1=!this.t1
  if(this.t1)
  {
    this.checkname="User";

  }
  else
  {
    this.checkname="Driver"
  }
}





  adminhomeclick(){
      this.router.navigate(['adminHome']);
  }
  adminrouteclick()
  {
    this.router.navigate(['admin/route'])
  }
  adminlogoutclick(){
    localStorage.setItem('AdminUse','0');
    this.router.navigate(['login']);
  }
  addClick()
  {
    var obs = this.httpClient.post("http://localhost:8080/admin/saveEmployee",{username:this.username,email:this.email,mobileNumber:this.mobileNumber,password:this.password,vehicleModel:this.vehicleModel,vehicleNumber:this.vehicleNumber,role:'driver'})
    obs.subscribe((res)=>{
      if(res)
      {
        console.log("successful");
        alert('User Added');
     window.location.reload()

      }
      else{
        alert('Unsuccessful');
        window.location.reload()
      }
    })
  }
  updateclick(){
    var obs = this.httpClient.put("http://localhost:8080/admin/editEmployee/"+this.employeeId,{username:this.username,email:this.email,mobileNumber:this.mobileNumber,password:this.password,vehicleModel:this.vehicleModel,vehicleNumber:this.vehicleNumber,role:'driver'})
    obs.subscribe((response)=>{
     console.log(response)
     alert('User Updated');
     window.location.reload()
    })
    
  }
  
  deleteButton(emailId:String){
    var flag=null;
    this.httpClient.delete('http://localhost:8080/admin/delete/'+emailId,{observe:"response"})
     .subscribe(
       (response) => {
          if(response.body==true){
              alert('User deleted Succussfully!!')
              window.location.reload()
          }
          else
              alert('User not deleted!!')
       }
     )
  }
  editButton(employeeId:string){
    let em,da,am;
    console.log(this.data1.length);
    for(let i=0;i<this.data1.length;i++){
      if(this.data1[i].employeeId==employeeId){
          em = this.data1[i].username;
          // am = this.data[i].sno;
          this.username = em;
          
          this.mobileNumber=this.data1[i].mobileNumber;
          this.password=this.data1[i].password;
          if(this.data1[i].role=='driver')
          {
            this.employeeId=this.data1[i].employeeId;
            this.vehicleModel=this.data1[i].vehicleModel;
            this.vehicleNumber=this.data1[i].vehicleNumber;
            this.email=this.data1[i].email;
            
          }
          else{
            this.emailId=this.data1[i].emailId;
          }

         
      }
    }
  }


}

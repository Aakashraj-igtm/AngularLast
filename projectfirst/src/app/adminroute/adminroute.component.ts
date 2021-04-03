import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes ,Router} from '@angular/router';
@Component({
  selector: 'app-adminroute',
  templateUrl: './adminroute.component.html',
  styleUrls: ['./adminroute.component.css']
})
export class AdminrouteComponent implements OnInit {

  data1:any=[];
  startPoint!:string;
  endPoint!:string;
  mobileNumber!:number;
  seats!:string;
  date!:string;
  time!:string;
  distance!:number;
  vehicleModel!:string;
  vehicleNumber!:string;

  data2:any=[];
  data3:any=[]

  data:any;
  constructor(private httpClient:HttpClient,private router:Router) {

    this.date=new Date().toLocaleDateString();
    this.time=new Date().toLocaleTimeString();

    let  obs= this.httpClient.get('http://localhost:8080/admin/getDriverRoutes',{observe:'response'});
    obs.subscribe(  (response)=>{
      this.data1=response.body;
     // console.log(JSON.stringify(response.body));
      console.log(this.data1);

    
    })
    /*let  obs1= this.httpClient.get('http://localhost:8080/admin/getEmployee',{observe:'response'});
    obs1.subscribe(  (response)=>{
      this.data2=(JSON.stringify(response.body));
     // console.log(JSON.stringify(response.body));
      // console.log(this.data2);

    
    })*/
  /*  for(let i of this.data1)
    {
console.log(i)
      for(let j of this.data2)
      {
        console.log(i.mobileNumber+" "+j.mobileNumber)
        if(i.mobileNumber===j.mobileNumber)
        {
          console.log("entered")
          //startPoint, String endPoint, int distance,Long mobileNumber,int seats
          this.data3.push({"vehicleModel" : j.vehicleModel,
          "vehicleNumber" : j.vehicleNumber,startPoint:i.startPoint,endPoint:i.endPoint,distance:i.distance,seats:i.seats
        })
        }
      }
    }
    // console.log(this.data3);*/
    
    
    this.data={
      source:"hyd",
      destination:"benglore",
      time:"5:40pm",
      distance:"30km",
      seats:"2",
      carmodel:"shift",
      registration:"T23423H1"
  
  
  }
   }
   addclick(){
     
    var obs = this.httpClient.post("http://localhost:8080/admin/addroutes",{startPoint:this.startPoint,endPoint:this.endPoint,mobileNumber:this.mobileNumber,distance:this.distance,seats:this.seats,date:this.date,time:this.time});
    obs.subscribe((res)=>{
      if(res)
      {
        console.log("successful");
        alert('Route Added');
     window.location.reload()

      }
      else{
        alert('Route unsuccessful');
        window.location.reload()
      }
    })
   }
    
  ngOnInit(): void {
  }

}

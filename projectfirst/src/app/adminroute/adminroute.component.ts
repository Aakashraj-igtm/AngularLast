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
  id!:any;
  startPoint!:string;
  endPoint!:string;
  mobileNumber!:number;
  seats!:number;
  date!:any;
  time!:string;
  distance!:number;
  vehicleModel!:string;
  drivername!:string;
  email!:string;
  vehicleNumber!:string;

  data2:any=[];
  data3:any=[]

  data:any;
  constructor(private httpClient:HttpClient,private router:Router) {


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
   deleteRoute(items)
   {
    

    console.log(items);
    var obs = this.httpClient.delete("http://localhost:8080/deleteRoutes/"+items.id)
    obs.subscribe((res)=>{
      if(res)
      {
        alert('Deleted')
        window.location.reload();
      }
      else{
        alert('Not deleted')
        
      }
    });
   }
   editRoute(item){
    this.id=item.id;
    this.email=item.email;
     this.startPoint=item.startPoint;
     this.endPoint=item.endPoint;
     this.date=item.date;
     this.time=item.time;
     this.mobileNumber=item.mobileNumber;
     this.distance=item.distance;
     this.vehicleModel=item.vehicleModel;
     this.vehicleNumber=item.vehicleNumber;
     this.seats=item.seats;
     this.drivername=item.drivername;
     /*  int routeId, String startPoint, String endPoint, int distance, int seats,
			String drivername, Long mobileNumber, String email, String vehicleModel, String vehicleNumber, String date,
			String time */
    

   }
   updateRoute()
   {
     
    var obs = this.httpClient.put("http://localhost:8080/editRoutes/"+this.id,{vehicleNumber:this.vehicleNumber,vehicleModel:this.vehicleModel,drivername:this.drivername,email:this.email,startPoint:this.startPoint,endPoint:this.endPoint,seats:this.seats,mobileNumber:this.mobileNumber,time:this.time,date:this.date,distance:this.distance})
    obs.subscribe((response)=>{
     console.log(response)
     alert('User Updated');
     window.location.reload()
    })
   }


   addclick(){
     if(!(this.seats>=0 && this.seats<5))
     {
       alert('You can give seats in range [1-4]');
       return;
     }
     if(!(this.distance>0))
     {
       alert('distance is not valid');
       return;
     }
     
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
   logoutclick()
   {
     console.log('hi')
     this.router.navigate(['/login']);
   }
    
  ngOnInit(): void {
  }

}

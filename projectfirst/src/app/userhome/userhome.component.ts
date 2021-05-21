import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes ,Router} from '@angular/router';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  data:any;
  emp:any=[];
  bookdata:any;
  val:any;
  del:string;
  constructor(private http:HttpClient,private router:Router) {

     

      


    
   /*this.data=[{
      source:"hyd1",
      destination:"benglore",
      time:"5:40pm",
      distance:"30km",
      seats:"2",
      carmodel:"shift",
      registration:"T23423H1"
    }]
    this.data.push({
      source:"hyd2",
      destination:"benglore",
      time:"5:40pm",
      distance:"30km",
      seats:"2",
      carmodel:"shift",
      registration:"T23423H1"
    })
    this.data.push({
      source:"hyd3",
      destination:"benglore",
      time:"5:40pm",
      distance:"30km",
      seats:"2",
      carmodel:"shift",
      registration:"T23423H1"
    })

    this.data.push({
      source:"hyd4",
      destination:"benglore",
      time:"5:40pm",
      distance:"30km",
      seats:"2",
      carmodel:"shift",
      registration:"T23423H1"
    })

    this.data.push({
      source:"hyd5",
      destination:"benglore",
      time:"5:40pm",
      distance:"30km",
      seats:"2",
      carmodel:"shift",
      registration:"T23423H1"
    })*/









   }
   userlogout()
   { 
     //localStorage.clear();
     localStorage.setItem('SessionUse','0');
     this.router.navigate(['login']);
   }

   saveBooking(item)
   {
     console.log("item")
    console.log(item);
  
    console.log(localStorage.getItem('emaildetails'))
    /*int seats, String username, Long mobileNumber, String vehicleModel, String vehicleNumber,
			String date, String time, String placeA, String placeB */
    var obs = this.http.post("http://localhost:8080/saveBooking/"+item.id,{seats:item.seats,username:item.drivername,mobileNumber:item.mobileNumber,vehicleModel:item.vehicleModel,vehicleNumber:item.vehicleNumber,date:item.date,time:item.time,placeA:item.startPoint,placeB:item.endPoint,email:localStorage.getItem('emaildetails')})
    obs.subscribe((res)=>{

      if(res)
      {
        alert('User Registered')
        window.location.reload();
      }
      else{
        alert('Unsuccessful')
      }
    })


   }

   cancelBooking(item:any)
   {
     console.log("item")
    console.log(item);
    /* int seats, String username, Long mobileNumber, String vehicleModel, String vehicleNumber,
			String date, String time, String placeA , String placeB,String email */
     
    this.del = item.seats+','+item.drivername+','+item.mobileNumber+','+item.vehicleModel+','+item.vehicleNumber+','+item.date+','+item.time+','+item.startPoint+','+item.endPoint+','+localStorage.getItem('emaildetails')+','+item.id; 
    var obs = this.http.delete("http://localhost:8080/deleteBooking/"+this.del)
    obs.subscribe((res)=>{
      if(res)
      {
        alert('Booking Cancelled')
        window.location.reload();
      }
      else{
        alert('Booking may not be done')
        
      }
    })


   }
   
   book(val)
   {
    this.bookdata=val;
    
   }

  ngOnInit(): void {

    let  obs= this.http.get('http://localhost:8080/admin/getDriverRoutes',{observe:'response'});
    obs.subscribe(
      (response)=>{
       // console.log(JSON.stringify(response.body));
        this.data=response.body;
        console.log(this.data);
      });
  }
}
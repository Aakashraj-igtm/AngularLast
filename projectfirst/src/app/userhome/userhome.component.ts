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
  bookdata:any;
  val:any;
  constructor(private http:HttpClient,private router:Router) {

    let  obs= this.http.get('http://localhost:8080/routes',{observe:'response'});
    obs.subscribe(
      (response)=>{
       // console.log(JSON.stringify(response.body));
        this.data=response.body;
        console.log(this.data);
      });
     

      


    
   /* this.data=[{
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
     localStorage.clear();
     localStorage.setItem('SessionUse','0');
     this.router.navigate(['login']);
   }
   book(val)
   {
     this.bookdata=val
   }

  ngOnInit(): void {
  }

}

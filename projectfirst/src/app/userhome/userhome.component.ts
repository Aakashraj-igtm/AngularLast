import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  data:any;
  bookdata:any;
  val:any;
  constructor() {
    
    this.data=[{
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
    })









   }
   book(val)
   {
     this.bookdata=val
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminroute',
  templateUrl: './adminroute.component.html',
  styleUrls: ['./adminroute.component.css']
})
export class AdminrouteComponent implements OnInit {

  data:any;
  constructor() {
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
  ngOnInit(): void {
  }

}

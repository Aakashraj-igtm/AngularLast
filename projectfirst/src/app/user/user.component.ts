import { Component, OnInit } from '@angular/core';
import { Router,RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { }

  logOut()
  {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}

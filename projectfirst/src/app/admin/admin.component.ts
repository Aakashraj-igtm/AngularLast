import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  logOut()
  {
    this.router.navigate[('/login')];
  }
  ngOnInit(): void {
  }

}

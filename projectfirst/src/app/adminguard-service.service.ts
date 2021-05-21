import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminguardServiceService {

  constructor() { }
  gettoken(){
    return localStorage.getItem('AdminUse')=='1';
  }
}
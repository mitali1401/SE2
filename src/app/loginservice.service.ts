import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  
  private apiURL: string = 'webapi/v1/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })

  }
  
  

  loginInfo(id,password){
    let data = {"id":parseInt(id),"password":password};
    return this.http.post(this.apiURL+'login',JSON.stringify(data),this.httpOptions)
    
  }
}
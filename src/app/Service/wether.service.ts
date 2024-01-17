import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'node:console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WetherService {
 
  constructor(private http: HttpClient) {}

 
  

  getWatherData(city:string):Observable<any> {


  
    

    var headers={
      'X-RapidAPI-Key': 'c5ee053a7fmsh57d899fa7a92598p10d65bjsn7f41cc23410e',
      'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'

    }
    var q=city;
    var appid= [
      'da0f9c8d90bde7e619c3ec47766a42f4', '<REQUIRED>' ];
    var units='standard'
    return this.http.get( 'https://openweather43.p.rapidapi.com/weather',{params:{q,appid,units},headers:headers})
    
    
  
  }

 



  
}

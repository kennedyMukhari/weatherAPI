import { Http } from '@angular/http'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  apiKey ='deba7a0f7f06490c83b172657191406&q';
  url;
  constructor(public http: Http) {

    this.url = 'apixu.com/v1/current.json?';
  }
  getWeather(city) {
    return this.http.get('http://api.'+this.url+'key='+this.apiKey+'='+city)
    // http://api.apixu.com/v1/current.json?key=deba7a0f7f06490c83b172657191406&q=Paris
     .map(res => res.json());
  }
} 
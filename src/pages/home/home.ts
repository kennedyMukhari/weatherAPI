import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather'
import { updateDate } from 'ionic-angular/umd/util/datetime-util';
import { Storage } from '@ionic/storage'
import { v } from '@angular/core/src/render3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countryName:any;
  time:any;
  cityName: any;
  regionName: any;
  temp: any;
  icon: any;
  humid:any;
  clouds:any;
  update:any;
  wind:any;
  text:any;
  windSpeed
  location: {
    city:string,
  }

  constructor(public navCtrl: NavController, private weatherprovider:WeatherProvider,
    private storage:Storage) {
    
  }

  getWeathers(city) {

  this.weatherprovider.getWeather(city)
    .subscribe(weather => {
      this.cityName = weather.location.name;
      this.icon = weather.current.condition.icon;
      this.temp =weather.current.temp_c;
      this.regionName = weather.location.region;
      this.countryName = weather.location.country;
      this.time = weather.location.localtime;
      this.humid = weather.current.humidity;
      this.clouds = weather.current.cloud;
      this.update = weather.current.last_updated;
      this.wind = weather.current.wind_dir;
      this.text = weather.current.condition.text;
      this.windSpeed = weather.current.wind_kph;
    })
}

  ionViewWillEnter() {
    this.storage.get('location').then((val) =>{
      if(val !=null){
        this.location = JSON.parse(val);
      }else {
        this.location = {
          city: 'Soweto'
        }
      }
      this.weatherprovider.getWeather(this.location.city)
      .subscribe(weather => {
        this.cityName = weather.location.name;
        this.icon = weather.current.condition.icon;
        this.temp =weather.current.temp_c;
        this.regionName = weather.location.region;
        this.countryName = weather.location.country;
        this.time = weather.location.localtime;
        this.humid = weather.current.humidity;
        this.clouds = weather.current.cloud;
        this.update = weather.current.last_updated;
        this.wind = weather.current.wind_dir;
        this.text = weather.current.condition.text;
        this.windSpeed = weather.current.wind_kph;
  
        
        console.log(weather);
        });
    });


  }

}

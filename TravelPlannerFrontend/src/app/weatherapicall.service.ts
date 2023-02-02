import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseapicallService } from './databaseapicall.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherapicallService {
  
  apiKey: string = "e85ad92f9171a03d877362e7ff6ee2c3";
  dateForForecast: string = new Date().toISOString().substring(0,10);

  constructor(private http: HttpClient, private databaseapicall: DatabaseapicallService) {
      
  }

  @Output() aChangedDateEvent = new EventEmitter<string>();

  AChangedDate(msg: string) {
    this.dateForForecast = msg;
    this.aChangedDateEvent.emit(msg);
  }

  public getLatLong(name: string) {
    
    let geocoderAPI: string = "http://api.openweathermap.org/geo/1.0/direct?q=" + name + "&limit=1&appid=" + this.apiKey;
    return this.http.get(geocoderAPI, {
      params: {
        action: 'query',
      }
    });

  }

  public getWeather(lat: string, lon: string) {

    let weatherAPI: string = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=metric";
    return this.http.get(weatherAPI, {
        params: {
          action: 'query',
        }
    });

  }

  public getForecastWeather(lat:string, lon:string) {

    let weatherForecastAPI: string = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=metric";
    return this.http.get(weatherForecastAPI, {
        params: {
          action: 'query',
        }
    });

  }

  
}









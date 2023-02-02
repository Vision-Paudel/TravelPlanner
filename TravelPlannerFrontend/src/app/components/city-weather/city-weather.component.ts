import { Component } from '@angular/core';
import { WeatherapicallService } from '../../weatherapicall.service';
import { DatabaseapicallService } from '../../databaseapicall.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent {
  titleOfWeather: string = "Current Weather for ";
  city: string = "";
  dateForWeather: string = new Date().toISOString().substring(0,10);
  lat: string = "";
  lon: string = "";

  weatherInfo: any;
  weatherForecastInfo: any;

  icon: string = "";
  condition: string = "";
  iconSrc: string = "";

  temp: string = "";
  feels_like: string = "";
  humidity: string = "";
  pressure: string = "";
  temp_max: string = "";
  temp_min: string = "";

  constructor(private weatherapicall: WeatherapicallService, private databaseapicall: DatabaseapicallService){
    this.getLatLonInformation("Edmonton");
    this.city = "Edmonton";
    
    this.databaseapicall.aChangedEvent
    .subscribe((data:string) => {
        this.city = data;
        this.condition = "loading..." ;
        this.temp = "loading..." ;
        this.feels_like = "loading...";
        this.humidity = "loading...";
        this.pressure = "loading...";
        this.temp_max = "loading...";
        this.temp_min = "loading...";
      
        let date = new Date();
        if (date.toISOString().substring(0,10) === this.dateForWeather){
          this.titleOfWeather = "Current Weather for ";
          this.getLatLonInformation(data);            
        }else{
            this.titleOfWeather = "Weather forecast for " + this.dateForWeather + " for ";
            this.getLatLonInformationForWeatherForecast(databaseapicall.currentCity, this.dateForWeather);

        }
        
    });

    this.weatherapicall.aChangedDateEvent
    .subscribe((data:string) => {
        this.city = databaseapicall.currentCity;
        this.dateForWeather = data
        this.condition = "loading..." ;
        this.temp = "loading..." ;
        this.feels_like = "loading...";
        this.humidity = "loading...";
        this.pressure = "loading...";
        this.temp_max = "loading...";
        this.temp_min = "loading...";
        
        let date = new Date();
        if (date.toISOString().substring(0,10) === data){
          this.titleOfWeather = "Current Weather for ";
          this.getLatLonInformation(data);            
        }else{
            this.titleOfWeather = "Weather forecast for " + data + " for ";
            this.getLatLonInformationForWeatherForecast(databaseapicall.currentCity, data);

        }
    });


  }

  getLatLonInformation(name: string){
      this.weatherapicall.getLatLong(name).subscribe(
      cityInfo => this.populateLatLon(cityInfo),
    );
  }

  populateLatLon(cityInfo: any){
    this.lat = cityInfo[0].lat;
    this.lon = cityInfo[0].lon;

    this.weatherapicall.getWeather(this.lat,this.lon).subscribe(
      weatherInfo => this.populateWeatherInfo(weatherInfo),
    );

  }

  populateWeatherInfo(weatherInfo: any){
    this.weatherInfo = weatherInfo;
        
    this.icon = this.weatherInfo.weather[0].icon;
    this.condition = this.getCondition(this.icon);
    this.iconSrc = "http://openweathermap.org/img/wn/" + this.icon +"@2x.png";

    this.temp = this.weatherInfo.main.temp + " C"
    this.feels_like = this.weatherInfo.main.feels_like + " C"
    this.humidity = this.weatherInfo.main.humidity + " %"
    this.pressure = this.weatherInfo.main.pressure + " hPa"
    this.temp_max = this.weatherInfo.main.temp_max + " C"
    this.temp_min = this.weatherInfo.main.temp_min + " C"

  }

  getCondition(icon: string){
    
    if (icon.startsWith("01")) return "Clear sky";
    if (icon.startsWith("02")) return "Few clouds";
    if (icon.startsWith("03")) return "Scattered clouds";
    if (icon.startsWith("04")) return "Broken Clouds";
    if (icon.startsWith("09")) return "Shower rain";
    if (icon.startsWith("10")) return "Rain";
    if (icon.startsWith("11")) return "Thunderstorm";
    if (icon.startsWith("13")) return "Snow";
    if (icon.startsWith("50")) return "Mist";
    else return "Unknown weather condition!";

  }

  getLatLonInformationForWeatherForecast(name: string, date: string){
      this.weatherapicall.getLatLong(name).subscribe(
      cityInfo => this.populateLatLonForWeatherForecast(cityInfo, date),
    );
  } 

  populateLatLonForWeatherForecast(cityInfo: any, date: string){
    this.lat = cityInfo[0].lat;
    this.lon = cityInfo[0].lon;
    
    this.weatherapicall.getForecastWeather(this.lat,this.lon).subscribe(
      weatherInfo => this.populateWeatherInfoForWeatherForecast(weatherInfo, date),
    );

  }

  populateWeatherInfoForWeatherForecast(weatherInfo: any, date: string){

    this.weatherForecastInfo = weatherInfo.list;
        
    for(let i = 0; i < 100; i++){

      if(this.weatherForecastInfo[i].dt_txt.substring(0,10) == date){
        this.weatherInfo = this.weatherForecastInfo[i];
        break;
      }

    }
    
    this.icon = this.weatherInfo.weather[0].icon;
    this.condition = this.getCondition(this.icon);
    this.iconSrc = "http://openweathermap.org/img/wn/" + this.icon +"@2x.png";

    this.temp = this.weatherInfo.main.temp + " C"
    this.feels_like = this.weatherInfo.main.feels_like + " C"
    this.humidity = this.weatherInfo.main.humidity + " %"
    this.pressure = this.weatherInfo.main.pressure + " hPa"
    this.temp_max = this.weatherInfo.main.temp_max + " C"
    this.temp_min = this.weatherInfo.main.temp_min + " C"

  }

}

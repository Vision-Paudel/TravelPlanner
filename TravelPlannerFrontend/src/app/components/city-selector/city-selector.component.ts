import { Component, Input } from '@angular/core';
import { DatabaseapicallService } from '../../databaseapicall.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent {
   
  cityNames: string[] = [];
  selected_city: string= "Edmonton";


  constructor(private databaseapicall: DatabaseapicallService){

    databaseapicall.getAllCityNames().subscribe(
      value => this.populateCityNames(value),
    );
  
  }
     
  populateCityNames(value: any){
    this.cityNames = value.sort();;
  }

  getCity(objectEvent: any) {
    this.selected_city = objectEvent.target.value;
    this.databaseapicall.AChanged(this.selected_city);
  }
  
}

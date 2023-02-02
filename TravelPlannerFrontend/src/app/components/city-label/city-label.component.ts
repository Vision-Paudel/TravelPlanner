import { Component } from '@angular/core';
import { DatabaseapicallService } from '../../databaseapicall.service';

@Component({
  selector: 'app-city-label',
  templateUrl: './city-label.component.html',
  styleUrls: ['./city-label.component.css']
})
export class CityLabelComponent {

  cityInformation: any;
  cityLabel: string = "";

  constructor(private databaseapicall: DatabaseapicallService){

    this.getCityLabelInformation("Edmonton");

    this.databaseapicall.aChangedEvent
    .subscribe((data:string) => {
      this.getCityLabelInformation(data);
    });
    
  }

  getCityLabelInformation(name: string){
    this.cityInformation = this.databaseapicall.getACity(name).subscribe(
      value => this.populateCityLabel(value),
    );
  }

  populateCityLabel(value: any){
    this.cityLabel = value.label;
  }

}

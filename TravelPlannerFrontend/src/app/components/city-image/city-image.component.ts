import { Component } from '@angular/core';
import { DatabaseapicallService } from '../../databaseapicall.service';

@Component({
  selector: 'app-city-image',
  templateUrl: './city-image.component.html',
  styleUrls: ['./city-image.component.css']
})
export class CityImageComponent {

  cityInformation: any;
  cityImageLink: string = "";

  constructor(private databaseapicall: DatabaseapicallService){

    this.getCityImageLinkInformation("Edmonton");

    this.databaseapicall.aChangedEvent
    .subscribe((data:string) => {
      this.getCityImageLinkInformation(data);
    });
    
  }

  getCityImageLinkInformation(name: string){
    this.cityInformation = this.databaseapicall.getACity(name).subscribe(
      value => this.populateCityImageLink(value),
    );
  }
  
  populateCityImageLink(value: any){
    this.cityImageLink = value.imagelink;
  }


}

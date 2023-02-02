import { Component} from '@angular/core';
import { WeatherapicallService } from '../../weatherapicall.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  currentDate: Date;
  maxDate: Date;
  pickedDate: Date;
  minDateString: string;
  maxDateString: string;
  pickedDateString: string;

  datePickerFromDOM: any;
  
  constructor(private weatherapicall: WeatherapicallService){

    this.currentDate = new Date();
    this.maxDate = new Date();    
    this.maxDate.setDate(this.currentDate.getDate()+4);
    this.pickedDate = new Date();

    this.minDateString = this.currentDate.toISOString().substring(0,10);
    this.maxDateString = this.maxDate.toISOString().substring(0,10);
    this.pickedDateString = this.pickedDate.toISOString().substring(0,10);

  }

  public getForecastDate(objectEvent: any) {
    var fullDateString : string = objectEvent.target.value;
    
    if (fullDateString != null && !(fullDateString === ""))
        this.weatherapicall.AChangedDate(fullDateString);
  }

}

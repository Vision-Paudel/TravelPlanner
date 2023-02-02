import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseapicallService {

  currentCity: string = "Edmonton";

  constructor(private http: HttpClient) {
  
  }

  @Output() aChangedEvent = new EventEmitter<string>();

  AChanged(msg: string) {
    this.currentCity = msg;
    this.aChangedEvent.emit(msg);
  }

  public getAllCityNames() {
    const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8080/city/name/all', {headers: headers});
  }

  public getACity(name: string) {
    const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8080/city/' + name, {headers: headers    });
  }
  
}

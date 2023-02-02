import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { CityLabelComponent } from './components/city-label/city-label.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { CityImageComponent } from './components/city-image/city-image.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitySelectorComponent,
    CityLabelComponent,
    CityWeatherComponent,
    CityImageComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

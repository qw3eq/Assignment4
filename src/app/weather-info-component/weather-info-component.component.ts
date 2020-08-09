import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info-component',
  templateUrl: './weather-info-component.component.html',
  styleUrls: ['./weather-info-component.component.css']
})
export class WeatherInfoComponentComponent implements OnInit {

  @Input()
  data;

  currentTemp;
  minTemp;
  maxTemp;
  long;
  lat;


  constructor() {
  }

  ngOnInit(): void {
    this.currentTemp = this.convertTemp(this.data.main.temp);
    this.minTemp = this.convertTemp(this.data.main.temp_min);
    this.maxTemp = this.convertTemp(this.data.main.temp_max);

    this.long = this.data.coord.lon;
    this.lat = this.data.coord.lat;
  }
  
  private convertTemp(tempK: number) {
    return (tempK - 273.15).toFixed(2)
  }


}

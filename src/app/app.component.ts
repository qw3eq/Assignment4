import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityName: string = 'City';
  apiKey: string = 'd1df9180dcdf7b97a5757d8f3cbb4a30';
  weatherData = null;

  constructor(private http: HttpClient) {

  }

  onEnter(value : string) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${this.apiKey}`;
    this.http
      .get(url, { responseType: 'text' })
      .subscribe(res => {
        
        
        let jsonData = JSON.parse(res);

        this.cityName = jsonData.name;

        this.weatherData = {
          coord: jsonData.coord,
          main: jsonData.main
        }
      }, error => {
        this.cityName = "City not found";
      })
      
  }
}

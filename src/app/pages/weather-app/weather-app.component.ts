import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherService } from 'src/services/weather.service';
@Component({
  selector: 'weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss'],
})
export class WeatherAppComponent implements OnInit {
  locations: Array<object> = [];
  weather: any;
  city: any;
  unit: any;
  constructor(private weatherService: weatherService) {}

  ngOnInit(): void {}
  trackByFn(idx, location) {
    return location.id;
  }
  async onSaveLocation() {
    this.weather = await this.weatherService.getWeather(this.city, this.unit);
    await this.locations.push(this.weather);
    localStorage.setItem('locations', JSON.stringify(this.locations));
    this.city = '';
    this.unit = '';
    return this.locations;
  }
}

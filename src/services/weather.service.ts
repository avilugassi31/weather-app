import axios from 'axios';
import { storageService } from './storageService.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class weatherService {
  async getWeather(city, unit) {
    if (unit === 'metric') {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=0d7303c17ee3d3482cd82a2ad273a90d`
      );
      storageService.store('location', data);
      console.log('data:', data.list[0]);
      return data.list[0];
    } else if (unit === 'standard') {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0d7303c17ee3d3482cd82a2ad273a90d`
      );
      console.log('data:', data);
      storageService.store('location', data);
      return data;
    } else {
      return;
    }
  }
}

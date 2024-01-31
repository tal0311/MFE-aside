import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit{
  @Input() weather: any = null

  ngOnInit(): void {
    console.log(this.weather);
  }


  getWeatherIconUrl() {
    if (!this.weather) {
      return '';
    }
    
    const srcMap ={
      'light rain': 'https://www.accuweather.com/images/weathericons/12.svg',
      'rain': 'https://www.accuweather.com/images/weathericons/12.svg',
      'heavy rain': 'https://www.accuweather.com/images/weathericons/18.svg',
      'partly sunny': 'https://www.accuweather.com/images/weathericons/3.svg',
      'mostly cloudy': 'https://www.accuweather.com/images/weathericons/6.svg',
      'cloudy': 'https://www.accuweather.com/images/weathericons/7.svg',
      'clear': 'https://www.accuweather.com/images/weathericons/1.svg',
      'sunny': 'https://www.accuweather.com/images/weathericons/1.svg',
      'snow': 'https://www.accuweather.com/images/weathericons/14.svg',
      'heavy snow': 'https://www.accuweather.com/images/weathericons/15.svg',
      'light snow': 'https://www.accuweather.com/images/weathericons/13.svg',
      't-storms': 'https://www.accuweather.com/images/weathericons/17.svg',
      'mostly sunny': 'https://www.accuweather.com/images/weathericons/3.svg',
      'partly cloudy': 'https://www.accuweather.com/images/weathericons/3.svg',
      'hazy sunshine': 'https://www.accuweather.com/images/weathericons/5.svg',
      'moderate rain': 'https://www.accuweather.com/images/weathericons/12.svg',
      'showers': 'https://www.accuweather.com/images/weathericons/12.svg',
      'intermittent clouds': 'https://www.accuweather.com/images/weathericons/4.svg',
    }
    return srcMap[this.weather.desc.toLowerCase()];
  }
}

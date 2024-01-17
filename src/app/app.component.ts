import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { WetherService } from './Service/wether.service';
import { log } from 'console';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WetherService]
})
export class AppComponent {
  title = 'angular-wether-app';
  weatherData=''

  IsChageLocation = false;
  TodayData: Date | undefined;

  constructor(private service: WetherService, private cdr: ChangeDetectorRef) {
    this.TodayData = new Date();
   
  }

  changeLocation() {
    this.IsChageLocation = this.IsChageLocation == true ? true : false;
  }

  async getWeatherDataCity() {
    try {
      var city = 'Thiruvananthapuram';
      this.weatherData = await this.service.getWatherData(city).toPromise();
      this.cdr.detectChanges(); 
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }


}

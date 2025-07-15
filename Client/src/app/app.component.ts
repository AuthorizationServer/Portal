import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './app.config.service';
import { MonitoringService } from './app.monitoring.service';
import { config } from 'rxjs';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private monitoringService: MonitoringService
  ) {
  }

  async ngOnInit() {
  }


  title = 'Client';
}

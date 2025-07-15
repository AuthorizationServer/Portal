import { Injectable } from "@angular/core";
import { ConfigService } from "./app.config.service";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  private appInsights: ApplicationInsights | null = null;


  constructor(private configService: ConfigService) {
    const promise = this.configService.getConfigAsync();
    promise.then(config => {
      this.appInsights = new ApplicationInsights({
        config: {
          instrumentationKey: this.configService.getConfig().instrumentationKey,
          enableAutoRouteTracking: true,
          enableUnhandledPromiseRejectionTracking: true
        }
      });
      this.appInsights.loadAppInsights();
      this.appInsights.trackPageView(); // Manually track the initial page view
    });
  }
}

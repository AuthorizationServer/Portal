import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config | null = null;
  private promise: Promise<Config> | null = null;

  constructor(private http: HttpClient) {
    this.setConfig();
  }

  setConfig(): Promise<Config> {
    if (!this.config) {
      if (!this.promise) {
        const response = this.http.get<Config>('/config');
        var promise = firstValueFrom(response);
        this.promise = promise;
        promise.then(config => { this.config = config });
        return firstValueFrom(response);
      }
      else
      {
        return this.promise;
      }
    }
    return Promise.resolve(this.config);
  }

  getConfigAsync(): Promise<Config> {
    if (this.config) {
      return Promise.resolve(this.config);
    }
    if (this.promise) {
      return this.promise;
    }
    throw new Error('Configuration not set. Call setConfig() first.');
  }

  getConfig(): Config {
    if (!this.config) {
      throw new Error('Configuration not set. Call setConfig() first.');
    }
    return this.config;      
  }
}

export interface Config {
  apiUrl: string;
  instrumentationKey: string;
}

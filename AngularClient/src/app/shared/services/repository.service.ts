import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  public getData = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
 
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class APIDataService implements OnInit {
  public url = 'http://www.mocky.io/v2/5ba8efb23100007200c2750c';
  constructor(private http:HttpClient) { };
  ngOnInit(): void {}
  public getAPIData(){
    return this.http.get(this.url);
  }
}

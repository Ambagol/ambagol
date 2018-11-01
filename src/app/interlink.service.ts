import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterlinkService {

  constructor(private _http: HttpClient) { }
}

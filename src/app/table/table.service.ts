import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8080/tables';
  getData() {
    return this.http.get(this.url);
  }
}

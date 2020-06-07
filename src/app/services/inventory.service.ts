import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class InventoryService {

  constructor(private http:HttpClient) {}

  getWarehouses() {
    return this.http.get('/server/inventory/v1/warehouses');
  }
}

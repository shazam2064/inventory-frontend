import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class WarehouseService {

  constructor(private http: HttpClient) {}

  getWarehouses() {
    return this.http.get('/server/inventory/v1/warehouses');
  }

  getWarehouse(id: string) {
    return this.http.get('/server/inventory/v1/warehouses/' + id);
  }

  createWarehouse(warehouse) {
    let body = JSON.stringify(warehouse);
    return this.http.post('/server/inventory/v1/warehouses', body, httpOptions);
  }

  updateWarehouse(id: string, warehouse) {
    let body = JSON.stringify(warehouse);
    return this.http.put('/server/inventory/v1/warehouses/' + id, body, httpOptions);
  }

  deleteWarehouse(id: string) {
    return this.http.delete('/server/inventory/v1/warehouses/' + id);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class InventoryService {

  constructor(private http: HttpClient) {
  }

  // Get all lists of warehouse, group, units, location, and movement types

  // getWarehouses() {
  //   return this.http.get('/server/inventory/v1/warehouses');
  // }

  getGroups() {
    return this.http.get('/server/inventory/v1/groups');
  }

  getUnits() {
    return this.http.get('/server/inventory/v1/units');
  }

  getLocations() {
    return this.http.get('/server/inventory/v1/locations');
  }

  getMovementTypes() {
    return this.http.get('/server/inventory/v1/movement-types');
  }

  // get stuff by id

  // getWarehouse(id: string) {
  //   return this.http.get('/server/inventory/v1/warehouses/' + id);
  // }

  getGroup(id: string) {
    return this.http.get('/server/inventory/v1/groups/' + id);
  }

  getUnit(id: string) {
    return this.http.get('/server/inventory/v1/units/' + id);
  }

  getLocation(id: string) {
    return this.http.get('/server/inventory/v1/locations/' + id);
  }

  getMovementType(id: string) {
    return this.http.get('/server/inventory/v1/movement-types/' + id);
  }

  // Create Stuff

  // createWarehouse(warehouse) {
  //   let body = JSON.stringify(warehouse);
  //   return this.http.post('/server/inventory/v1/warehouses', body, httpOptions);
  // }

  createGroup(group) {
    let body = JSON.stringify(group);
    return this.http.post('/server/inventory/v1/groups', body, httpOptions);
  }

  createUnit(unit) {
    let body = JSON.stringify(unit);
    return this.http.post('/server/inventory/v1/units', body, httpOptions);
  }

  createLocation(location) {
    let body = JSON.stringify(location);
    return this.http.post('/server/inventory/v1/locations', body, httpOptions);
  }

  createMovementType(movementType) {
    let body = JSON.stringify(movementType);
    return this.http.post('/server/inventory/v1/movement-types', body, httpOptions);
  }

  // update stuff

  updateWarehouse(id: string, warehouse) {
    let body = JSON.stringify(warehouse);
    return this.http.put('/server/inventory/v1/warehouses/' + id, body, httpOptions);
  }
  //
  // updateWarehouse(warehouse) {
  //   let body = JSON.stringify(warehouse);
  //   return this.http.put('/server/inventory/v1/warehouses/5ee3ab52a60e3514525036fa', body, httpOptions);
  // }


  updateGroup(id: string, group) {
    let body = JSON.stringify(group);
    return this.http.put('/server/inventory/v1/groups/' + id, body, httpOptions);
  }

  updateUnit(id: string, unit) {
    let body = JSON.stringify(unit);
    return this.http.put('/server/inventory/v1/units/' + id, body, httpOptions);
  }

  updateLocation(id: string, location) {
    let body = JSON.stringify(location);
    return this.http.put('/server/inventory/v1/locations/' + id, body, httpOptions);
  }

  updateMovementType(id: string, movementType) {
    let body = JSON.stringify(movementType);
    return this.http.put('/server/inventory/v1/movement-types/' + id, body, httpOptions);
  }

  // delete stuff

  deleteWarehouse(id: string) {
    return this.http.delete('/server/inventory/v1/warehouses/' + id);
  }

  deleteGroup(id: string) {
    return this.http.delete('/server/inventory/v1/groups/' + id);
  }

  deleteUnit(id: string) {
    return this.http.delete('/server/inventory/v1/units/' + id);
  }

  deleteLocation(id: string) {
    return this.http.delete('/server/inventory/v1/locations/' + id);
  }

  deleteMovementType(id: string) {
    return this.http.delete('/server/inventory/v1/movement-types/' + id);
  }

}

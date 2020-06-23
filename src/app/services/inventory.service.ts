import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {Item} from "../models/item.model";
import {catchError, retry} from "rxjs/operators";
import {Warehouse} from "../models/warehouse.model";
import {Group} from "../models/group.model";
import {Unit} from "../models/unit.model";
import {MovementType} from "../models/movement-type.model";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class InventoryService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Get all lists of warehouse, group, units, location, and movement types

  getWarehouses(): Observable<Warehouse> {
    return this.http.get<Warehouse>('/server/inventory/v1/warehouses')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getGroups(): Observable<Group> {
    return this.http.get<Group>('/server/inventory/v1/groups')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUnits(): Observable<Unit> {
    return this.http.get<Unit>('/server/inventory/v1/units')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getLocations(): Observable<Location> {
    return this.http.get<Location>('/server/inventory/v1/locations')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getMovementTypes(): Observable<MovementType> {
    return this.http.get<MovementType>('/server/inventory/v1/movement-types')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getItems(): Observable<Item> {
    return this.http.get<Item>('/server/inventory/v1/items')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // get stuff by id

  getWarehouse(id): Observable<Warehouse> {
    return this.http.get<Warehouse>(('/server/inventory/v1/warehouses/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getGroup(id): Observable<Group> {
    return this.http.get<Group>(('/server/inventory/v1/groups/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUnit(id): Observable<Unit> {
    return this.http.get<Unit>(('/server/inventory/v1/units/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getLocation(id): Observable<Location> {
    return this.http.get<Location>(('/server/inventory/v1/locations/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getMovementType(id): Observable<MovementType> {
    return this.http.get<MovementType>(('/server/inventory/v1/movement-types/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getItem(id): Observable<Item> {
    return this.http.get<Item>(('/server/inventory/v1/items/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Create Stuff

  createWarehouse(warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse> ('/server/inventory/v1/warehouses', JSON.stringify(warehouse), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createGroup(group): Observable<Group> {
    return this.http.post<Group> ('/server/inventory/v1/groups', JSON.stringify(group), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createUnit(unit): Observable<Unit> {
    // @ts-ignore
    return this.http.post<Unit> ('/server/inventory/v1/units', JSON.stringify(unit), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createLocation(location): Observable<Location> {
    // @ts-ignore
    return this.http.post<Location> ('/server/inventory/v1/locations', JSON.stringify(location), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createMovementType(movementType): Observable<MovementType> {
    // @ts-ignore
    return this.http.post<MovementType> ('/server/inventory/v1/movement-types', JSON.stringify(movementType), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createItem(item): Observable<Item> {
    // @ts-ignore
    return this.http.post<Item> ('/server/inventory/v1/items', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // update stuff

  updateWarehouse(id, warehouse): Observable<Warehouse> {
    // @ts-ignore
    return this.http.put<Warehouse>(('/server/inventory/v1/warehouses') + id, JSON.stringify(warehouse), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  updateGroup(id, group): Observable<Group> {
    // @ts-ignore
    return this.http.put<Group>(('/server/inventory/v1/groups') + id, JSON.stringify(group), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateUnit(id, unit): Observable<Unit> {
    // @ts-ignore
    return this.http.put<Unit>(('/server/inventory/v1/units') + id, JSON.stringify(unit), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateLocation(id, location): Observable<Location> {
    // @ts-ignore
    return this.http.put<Location>(('/server/inventory/v1/locations') + id, JSON.stringify(location), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateMovementType(id, movementType): Observable<MovementType> {
    // @ts-ignore
    return this.http.put<MovementType>(('/server/inventory/v1/movement-types') + id, JSON.stringify(movementType), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateItem(id, item): Observable<Item> {
    // @ts-ignore
    return this.http.put<Item>(('/server/inventory/v1/items') + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // delete stuff

  deleteWarehouse(id){
    return this.http.delete<Warehouse>(('/server/inventory/v1/items') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteGroup(id){
    return this.http.delete<Group>(('/server/inventory/v1/groups') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteUnit(id){
    return this.http.delete<Unit>(('/server/inventory/v1/units') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteLocation(id){
    return this.http.delete<Location>(('/server/inventory/v1/locations') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteMovementType(id){
    return this.http.delete<MovementType>(('/server/inventory/v1/movement-types') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteItem(id){
    return this.http.delete<Item>(('/server/inventory/v1/items') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Get item automatically

  getItemAuto() {
    return this.http.get('/server/inventory/v1/items/I001');
  }

  // Error handle

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

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

  apiURL = 'http://localhost:8080/inventory/v1';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Get all lists of warehouse, group, units, location, and movement types

  getWarehouses(): Observable<Warehouse> {
    return this.http.get<Warehouse>(this.apiURL + '/warehouses')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getGroups(): Observable<Group> {
    return this.http.get<Group>(this.apiURL + '/groups')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUnits(): Observable<Unit> {
    return this.http.get<Unit>(this.apiURL + '/units')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getLocations(): Observable<Location> {
    return this.http.get<Location>(this.apiURL + '/locations')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getMovementTypes(): Observable<MovementType> {
    return this.http.get<MovementType>(this.apiURL + '/movement-types')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getItems(): Observable<Item> {
    return this.http.get<Item>(this.apiURL + '/items')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // get stuff by id

  getWarehouse(id): Observable<Warehouse> {
    return this.http.get<Warehouse>((this.apiURL + '/warehouses/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getGroup(id): Observable<Group> {
    return this.http.get<Group>((this.apiURL + '/groups/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUnit(id): Observable<Unit> {
    return this.http.get<Unit>((this.apiURL + '/units/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getLocation(id): Observable<Location> {
    return this.http.get<Location>((this.apiURL + '/locations/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getMovementType(id): Observable<MovementType> {
    return this.http.get<MovementType>((this.apiURL + '/movement-types/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getItem(id): Observable<Item> {
    return this.http.get<Item>((this.apiURL + '/items/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Create Stuff

  createWarehouse(warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse> (this.apiURL + '/warehouses', JSON.stringify(warehouse), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createGroup(group): Observable<Group> {
    return this.http.post<Group> (this.apiURL + '/groups', JSON.stringify(group), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createUnit(unit): Observable<Unit> {
    return this.http.post<Unit> (this.apiURL + '/units', JSON.stringify(unit), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createLocation(location): Observable<Location> {
    return this.http.post<Location> (this.apiURL + '/locations', JSON.stringify(location), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createMovementType(movementType): Observable<MovementType> {
    return this.http.post<MovementType> (this.apiURL + '/movement-types', JSON.stringify(movementType), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // createItem(item): Observable<Item> {
  //   return this.http.post<Item> (this.apiURL + '/items', JSON.stringify(item), this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }

  createItem(item) {
    return this.http.post<Item> (this.apiURL + '/items', item)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // createTodo(username, todo) {
  //   return this.http.post(`${TODO_JPA_URL}/users/${username}/todos`, todo);
  // }

  // update stuff

  updateWarehouse(id, warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>((this.apiURL + '/warehouses/') + id, JSON.stringify(warehouse), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  updateGroup(id, group): Observable<Group> {
    return this.http.put<Group>((this.apiURL + '/groups/') + id, JSON.stringify(group), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateUnit(id, unit): Observable<Unit> {
    return this.http.put<Unit>((this.apiURL + '/units/') + id, JSON.stringify(unit), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateLocation(id, location): Observable<Location> {
    return this.http.put<Location>((this.apiURL + '/locations/') + id, JSON.stringify(location), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateMovementType(id, movementType): Observable<MovementType> {
    return this.http.put<MovementType>((this.apiURL + '/movement-types/') + id, JSON.stringify(movementType), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateItem(id, item): Observable<Item> {
    return this.http.put<Item>((this.apiURL + '/items/') + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // delete stuff

  deleteWarehouse(id){
    return this.http.delete<Warehouse>((this.apiURL + '/warehouses/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteGroup(id){
    return this.http.delete<Group>((this.apiURL + '/groups/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteUnit(id){
    return this.http.delete<Unit>((this.apiURL + '/units/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteLocation(id){
    return this.http.delete<Location>((this.apiURL + '/locations/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteMovementType(id){
    return this.http.delete<MovementType>((this.apiURL + '/movement-types/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteItem(id){
    return this.http.delete<Item>((this.apiURL + '/items/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Get item automatically

  getItemAuto() {
    return this.http.get(this.apiURL + '/items/I001');
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

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

  // Get all lists of warehouse, group, unitsAll, location, and movement types

  getWarehouses(): Observable<Warehouse> {
    return this.http.get<Warehouse>(this.apiURL + '/warehousesAll')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getWarehousesRequest(params): Observable<any> {
    return this.http.get(this.apiURL + '/warehouses', {params});
  }

  getGroups(): Observable<Group> {
    return this.http.get<Group>(this.apiURL + '/groupsAll')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getGroupsRequest(params): Observable<any> {
    return this.http.get(this.apiURL + '/groups', {params});
  }

  getUnits(): Observable<Unit> {
    return this.http.get<Unit>(this.apiURL + '/unitsAll')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUnitsRequest(params): Observable<any> {
    return this.http.get(this.apiURL + '/units', {params});
  }

  getLocations(): Observable<Location> {
    return this.http.get<Location>(this.apiURL + '/locationsAll')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getLocationsRequest(params): Observable<any> {
    return this.http.get(this.apiURL + '/locations', {params});
  }

  getMovementTypes(): Observable<MovementType> {
    return this.http.get<MovementType>(this.apiURL + '/movement-typesAll')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getMovementTypesRequest(params): Observable<any> {
    return this.http.get(this.apiURL + '/movement-types', {params});
  }


  getItems(): Observable<Item> {
    return this.http.get<Item>(this.apiURL + '/itemsAll')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getItemsRequest(params): Observable<any> {
    return this.http.get(this.apiURL + '/items', {params});
  }

  // get stuff by id

  getWarehouse(id): Observable<Warehouse> {
    return this.http.get<Warehouse>((this.apiURL + '/warehousesAll/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getGroup(id): Observable<Group> {
    return this.http.get<Group>((this.apiURL + '/groupsAll/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUnit(id): Observable<Unit> {
    return this.http.get<Unit>((this.apiURL + '/unitsAll/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getLocation(id): Observable<Location> {
    return this.http.get<Location>((this.apiURL + '/locationsAll/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getMovementType(id): Observable<MovementType> {
    return this.http.get<MovementType>((this.apiURL + '/movement-typesAll/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getItem(id): Observable<Item> {
    return this.http.get<Item>((this.apiURL + '/itemsAll/') + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Create Stuff

  createWarehouse(warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse> (this.apiURL + '/warehousesAll', JSON.stringify(warehouse), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createGroup(group): Observable<Group> {
    return this.http.post<Group> (this.apiURL + '/groupsAll', JSON.stringify(group), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createUnit(unit): Observable<Unit> {
    return this.http.post<Unit> (this.apiURL + '/unitsAll', JSON.stringify(unit), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createLocation(location): Observable<Location> {
    return this.http.post<Location> (this.apiURL + '/locationsAll', JSON.stringify(location), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createMovementType(movementType): Observable<MovementType> {
    return this.http.post<MovementType> (this.apiURL + '/movement-typesAll', JSON.stringify(movementType), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  createItem(item): Observable<Item> {
    return this.http.post<Item> (this.apiURL + '/itemsAll', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // update stuff

  updateWarehouse(id, warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>((this.apiURL + '/warehousesAll/') + id, JSON.stringify(warehouse), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  updateGroup(id, group): Observable<Group> {
    return this.http.put<Group>((this.apiURL + '/groupsAll/') + id, JSON.stringify(group), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateUnit(id, unit): Observable<Unit> {
    return this.http.put<Unit>((this.apiURL + '/unitsAll/') + id, JSON.stringify(unit), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateLocation(id, location): Observable<Location> {
    return this.http.put<Location>((this.apiURL + '/locationsAll/') + id, JSON.stringify(location), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateMovementType(id, movementType): Observable<MovementType> {
    return this.http.put<MovementType>((this.apiURL + '/movement-typesAll/') + id, JSON.stringify(movementType), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  updateItem(id, item): Observable<Item> {
    return this.http.put<Item>((this.apiURL + '/itemsAll/') + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // delete stuff

  deleteWarehouse(id){
    return this.http.delete<Warehouse>((this.apiURL + '/warehousesAll/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteGroup(id){
    return this.http.delete<Group>((this.apiURL + '/groupsAll/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteUnit(id){
    return this.http.delete<Unit>((this.apiURL + '/unitsAll/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteLocation(id){
    return this.http.delete<Location>((this.apiURL + '/locationsAll/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteMovementType(id){
    return this.http.delete<MovementType>((this.apiURL + '/movement-typesAll/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  deleteItem(id){
    return this.http.delete<Item>((this.apiURL + '/itemsAll/') + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Get item automatically

  getItemAuto() {
    return this.http.get(this.apiURL + '/itemsAll/I001');
  }

  // Error handle

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

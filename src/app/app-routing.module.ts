import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { LocationComponent } from './components/location/location.component';
import { UnitComponent } from './components/unit/unit.component';
import { GroupComponent } from './components/group/group.component';
import { MovementTypeComponent } from './components/movement-type/movement-type.component';
import { AddWarehouseComponent } from './components/warehouse/add-warehouse/add-warehouse.component';
import { AddGroupComponent } from './components/group/add-group/add-group.component';
import { AddUnitComponent } from './components/unit/add-unit/add-unit.component';
import { AddLocationComponent } from './components/location/add-location/add-location.component';
import { AddMovementTypeComponent } from './components/movement-type/add-movement-type/add-movement-type.component';
import { WarehouseEditComponent } from './components/warehouse/warehouse-edit/warehouse-edit.component';
import { GroupEditComponent } from './components/group/group-edit/group-edit.component';
import { UnitEditComponent } from './components/unit/unit-edit/unit-edit.component';
import { LocationEditComponent } from './components/location/location-edit/location-edit.component';
import { MovementTypeEditComponent } from './components/movement-type/movement-type-edit/movement-type-edit.component';
import { LoginComponent } from './components/login/login.component';
import { ItemComponent } from './components/item/item.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import { AddItemComponent } from './components/item/add-item/add-item.component';
import { ItemEditComponent } from './components/item/item-edit/item-edit.component';
import { RouteGuardService } from "./services/route-guard.service";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/:name', component: HomeComponent, canActivate: [RouteGuardService]},
  {path: 'warehouse', component: WarehouseComponent, canActivate: [RouteGuardService]},
  {path: 'add-warehouse', component: AddWarehouseComponent, canActivate: [RouteGuardService]},
  {path: 'edit-warehouse/:id', component: WarehouseEditComponent, canActivate: [RouteGuardService]},
  {path: 'location', component: LocationComponent, canActivate: [RouteGuardService]},
  {path: 'add-location', component: AddLocationComponent, canActivate: [RouteGuardService]},
  {path: 'edit-location/:id', component: LocationEditComponent, canActivate: [RouteGuardService]},
  {path: 'unit', component: UnitComponent, canActivate: [RouteGuardService]},
  {path: 'add-unit', component: AddUnitComponent, canActivate: [RouteGuardService]},
  {path: 'edit-unit/:id', component: UnitEditComponent, canActivate: [RouteGuardService]},
  {path: 'group', component: GroupComponent, canActivate: [RouteGuardService]},
  {path: 'add-group', component: AddGroupComponent, canActivate: [RouteGuardService]},
  {path: 'edit-group/:id', component: GroupEditComponent, canActivate: [RouteGuardService]},
  {path: 'movement-type', component: MovementTypeComponent, canActivate: [RouteGuardService]},
  {path: 'add-movement-type', component: AddMovementTypeComponent, canActivate: [RouteGuardService]},
  {path: 'edit-movement-type/:id', component: MovementTypeEditComponent, canActivate: [RouteGuardService]},
  {path: 'item', component: ItemComponent, canActivate: [RouteGuardService]},
  {path: 'item-details/:id', component: ItemDetailsComponent, canActivate: [RouteGuardService]},
  {path: 'item-edit/:id', component: ItemEditComponent, canActivate: [RouteGuardService]},
  {path: 'add-item', component: AddItemComponent, canActivate: [RouteGuardService]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

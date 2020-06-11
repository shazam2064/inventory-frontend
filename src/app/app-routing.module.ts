import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {WarehouseComponent} from './components/warehouse/warehouse.component';
import {LocationComponent} from './components/location/location.component';
import {UnitComponent} from './components/unit/unit.component';
import {GroupComponent} from './components/group/group.component';
import {MovementTypeComponent} from './components/movement-type/movement-type.component';
import {AddWarehouseComponent} from './components/warehouse/add-warehouse/add-warehouse.component';
import {AddGroupComponent} from './components/group/add-group/add-group.component';
import {AddUnitComponent} from './components/unit/add-unit/add-unit.component';
import {AddLocationComponent} from './components/location/add-location/add-location.component';
import {AddMovementTypeComponent} from './components/movement-type/add-movement-type/add-movement-type.component';
import {WarehouseEditComponent} from './components/warehouse/warehouse-edit/warehouse-edit.component';
import {GroupEditComponent} from './components/group/group-edit/group-edit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'warehouse', component: WarehouseComponent},
  {path: 'add-warehouse', component: AddWarehouseComponent},
  {path: 'edit-warehouse/:id', component: WarehouseEditComponent},
  {path: 'location', component: LocationComponent},
  {path: 'add-location', component: AddLocationComponent},
  {path: 'unit', component: UnitComponent},
  {path: 'add-unit', component: AddUnitComponent},
  {path: 'group', component: GroupComponent},
  {path: 'add-group', component: AddGroupComponent},
  {path: 'edit-group/:id', component: GroupEditComponent},
  {path: 'movement-type', component: MovementTypeComponent},
  {path: 'add-movement-type', component: AddMovementTypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

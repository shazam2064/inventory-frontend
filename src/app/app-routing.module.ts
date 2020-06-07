import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {WarehouseComponent} from './components/warehouse/warehouse.component';
import {LocationComponent} from './components/location/location.component';
import {UnitComponent} from './components/unit/unit.component';
import {GroupComponent} from './components/group/group.component';
import {MovementTypeComponent} from './components/movement-type/movement-type.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'warehouse', component: WarehouseComponent},
  {path: 'location', component: LocationComponent},
  {path: 'unit', component: UnitComponent},
  {path: 'group', component: GroupComponent},
  {path: 'movement-type', component: MovementTypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

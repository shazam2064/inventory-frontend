import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { GroupComponent } from './components/group/group.component';
import { UnitComponent } from './components/unit/unit.component';
import { LocationComponent } from './components/location/location.component';
import { MovementTypeComponent } from './components/movement-type/movement-type.component';
import { HttpClientModule } from '@angular/common/http';
import { AddWarehouseComponent } from './components/warehouse/add-warehouse/add-warehouse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGroupComponent } from './components/group/add-group/add-group.component';
import { AddUnitComponent } from './components/unit/add-unit/add-unit.component';
import { AddLocationComponent } from './components/location/add-location/add-location.component';
import { AddMovementTypeComponent } from './components/movement-type/add-movement-type/add-movement-type.component';
import { WarehouseEditComponent } from './components/warehouse/warehouse-edit/warehouse-edit.component';
import { GroupEditComponent } from './components/group/group-edit/group-edit.component';
import { UnitEditComponent } from './components/unit/unit-edit/unit-edit.component';
import { LocationEditComponent } from './components/location/location-edit/location-edit.component';
import { MovementTypeEditComponent } from './components/movement-type/movement-type-edit/movement-type-edit.component';
import { ItemComponent } from './components/item/item.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import { ItemEditComponent } from './components/item/item-edit/item-edit.component';
import { AddItemComponent } from './components/item/add-item/add-item.component';
import { InventoryService } from "./services/inventory.service";
import { IconsModule } from "./icons.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    WarehouseComponent,
    GroupComponent,
    UnitComponent,
    LocationComponent,
    MovementTypeComponent,
    AddWarehouseComponent,
    AddGroupComponent,
    AddUnitComponent,
    AddLocationComponent,
    AddMovementTypeComponent,
    WarehouseEditComponent,
    GroupEditComponent,
    UnitEditComponent,
    LocationEditComponent,
    MovementTypeEditComponent,
    ItemComponent,
    ItemDetailsComponent,
    ItemEditComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IconsModule,
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


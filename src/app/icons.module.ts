import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Archive, Home, LogOut, MapPin, Move, Package, User, Clipboard, Layers, Grid } from 'angular-feather/icons';


const icons = {
  Clipboard,
  User,
  LogOut,
  Home,
  Archive,
  MapPin,
  Move,
  Package,
  Layers,
  Grid
};

@NgModule({

  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

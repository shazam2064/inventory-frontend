import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {Archive, Home, LogOut, MapPin, Move, Package, User, Clipboard, Layers, Grid, ShoppingCart} from 'angular-feather/icons';


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
  Grid,
  ShoppingCart
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

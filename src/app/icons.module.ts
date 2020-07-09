import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Archive, Home, LogOut, MapPin, Move, Package, User, Clipboard, Layers } from 'angular-feather/icons';


const icons = {
  Clipboard,
  User,
  LogOut,
  Home,
  Archive,
  MapPin,
  Move,
  Package,
  Layers
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

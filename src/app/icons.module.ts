import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Archive, Home, LogOut, MapPin, Move, Package, User } from 'angular-feather/icons';


const icons = {
  // Clipboard,
  User,
  LogOut,
  Home,
  Archive,
  MapPin,
  Move,
  Package
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

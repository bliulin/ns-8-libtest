import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { Canvas, createRect, Paint } from '@nativescript-community/ui-canvas';
import { NativeScriptCommonModule } from '@nativescript/angular'
import { Color } from '@nativescript/core';

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {
}

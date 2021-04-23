import { HttpClient } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { NativeScriptHttpClientModule } from "@nativescript/angular";
//import {NativeScriptSvgModule} from '@sergeymell/nativescript-svg/angular';
import { HighchartsModule } from '@mhtghn/nativescript-highcharts/angular';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule, NativeScriptHttpClientModule, HighchartsModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Canvas, CanvasView, createRect, Paint } from '@nativescript-community/ui-canvas';
import { Color } from '@nativescript/core';
import {exit} from 'nativescript-exit';

import { registerElement } from "@nativescript/angular";
registerElement("CanvasView", () => CanvasView);

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onExitTapped(): void {
    exit();
  }

  draw(event: { canvas: Canvas }) {
    const paint = new Paint();
    paint.setColor(new Color("black"));
    paint.strokeWidth = 10;
    event.canvas.drawRect(createRect(0, 0, 200, 100), paint);
  }
}

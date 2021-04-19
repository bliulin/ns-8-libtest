import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";
import {
  Canvas,
  CanvasView,
  createRect,
  Paint
} from "@nativescript-community/ui-canvas";
import { Color } from "@nativescript/core";
import { exit } from "nativescript-exit";

import {DownloadManager} from 'nativescript-downloadmanager'

import { registerElement } from "@nativescript/angular";
import { HttpClient } from "@angular/common/http";
registerElement("CanvasView", () => CanvasView);

@Component({
  selector: "Home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.

    this.testDownload();
  }

  testDownload(): void {
      this.httpClient.get("https://cachefly.cachefly.net/10mb.test").subscribe(
        (result) => {
          console.log('File downloaded: ' + result);
        },
      (err) => {
        console.error('Failed to download file');
        console.dir(err);
      })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
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

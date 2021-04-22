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
import { registerElement } from "@nativescript/angular";

import { Feedback, FeedbackPosition, FeedbackType } from 'nativescript-feedback';

import { Http } from '@nativescript/core'

registerElement("CanvasView", () => CanvasView);

@Component({
  selector: "Home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.

    this.testDownload();

    var feedback = new Feedback();

    feedback.show({
      title: "Custom colors :)",
      titleColor: new Color("black"),
      message: "Custom text colors and background color.",
      messageColor: new Color("#516a78"),
      duration: 2500,
      type: FeedbackType.Success,
      backgroundColor: new Color("lightskyblue"),
      onTap: () => console.log("showSuccessAltColor tapped")
    });
  }

  testDownload(): void {

    const url1= "https://cachefly.cachefly.net/10mb.test";
    const url2= "https://d1lfyz5kwt8vu9.cloudfront.net/nativescript-logo-2021.png";

    Http.getFile(url1).then(
      resultFile => {
        // The returned result will be File object
        console.log('File downloaded');
      },
      e => {
        console.dir(e);
      }
    )
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

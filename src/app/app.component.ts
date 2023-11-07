import { Component , AfterViewInit } from '@angular/core';
import { getAnalytics, logEvent } from "firebase/analytics";

import * as firebase from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  constructor(){}
  title = 'mahammed_javid_07';
  ngAfterViewInit(): void {
    const app = initializeApp(environment.firebaseConfig);
    getAnalytics(app);
    const analytics = getAnalytics();
    logEvent(analytics, 'notification_received');
  }
}

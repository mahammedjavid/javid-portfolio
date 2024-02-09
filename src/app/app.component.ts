import { Component, AfterViewInit } from '@angular/core';
import { getAnalytics, logEvent } from 'firebase/analytics';

import * as firebase from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environments';
import { ApiService } from './services/api.service';
import { SharedService } from './shared/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {}
  title = 'mahammed_javid_07';
  ngAfterViewInit(): void {
    const app = initializeApp(environment.firebaseConfig);
    getAnalytics(app);
    const analytics = getAnalytics();
    logEvent(analytics, 'notification_received');
    this.setUserInfoToSessionStorage();
  }
  async setUserInfoToSessionStorage() {
    const userFromSession = this.sharedService.getUserInfo();
    if(!userFromSession) return
    const user = await this.getUserPlan();
    if (!user?.length || !user) {
      sessionStorage.clear();
    } else {
      const newUserInfo = {
        user: user[0],
        accessToken: userFromSession.accessToken,
        refreshToken: userFromSession.refreshToken,
      };
      sessionStorage.setItem('user', JSON.stringify(newUserInfo));
    }
    console.log(user);
  }
  async getUserPlan(): Promise<any> {
    try {
      const res: any = await this.apiService
        .getUserDetailsByAccessToken()
        .toPromise();
      return res;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-other-module',
  templateUrl: './other-module.component.html',
  styleUrls: ['./other-module.component.scss'],
})
export class OtherModuleComponent implements OnInit {
  userDetails: any;
  plans: any = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.getAllPlans();
    this.getUserInfo();
  }

  getUserInfo() {
    this.userDetails = this.sharedService.getUserInfo();
  }
  getAllPlans() {
    this.apiService.getAllPlans().subscribe(
      (res: any) => {
        res.map((d: any) => (d.description = d.description.split(',')));
        this.plans = res;
        console.log(this.plans);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  moveToPlans(data: any) {
    this.userDetails
      ? this.mapThePlans(data)
      : this.router.navigate(['/_login']);
  }
  mapThePlans(plan: any) {
    const payload = {
      userId: this.userDetails?.user?.user_id,
      plan_id: plan.plan_id,
      group_id: 1,
    };
    this.apiService.mapThePlan(payload).subscribe((res: any) => {
      this.setUserInfoToSessionStorage();
      if (payload.plan_id === 1) {
        this.router.navigate([`_plans/${payload.plan_id}`]);
        return;
      }
      this.getThePaymentUrl(res.sessionId);
      console.log(res);
    });
  }
  getThePaymentUrl(sessionId: any) {
    this.apiService.getThePaymentUrl(sessionId).subscribe((res: any) => {
      window.open(res.url);
      console.log(res);
    });
  }
  async setUserInfoToSessionStorage() {
    const userFromSession = this.sharedService.getUserInfo();
    if (!userFromSession) return;
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

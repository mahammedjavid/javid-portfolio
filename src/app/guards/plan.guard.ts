import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanGuard implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {}
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const routePlanId = route.firstChild?.params['planId'];
    const user = await this.getUserPlan();
    const userPlanId = user[0]?.plan_id?.toString();
    if (routePlanId === userPlanId) {
      return true;
    }
    this.router.navigate(['/_login']);
    localStorage.clear()
    return false;
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

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userDetails: any;
  constructor(
    private __router: Router,
    private sharedService: SharedService,
    private apiService: ApiService
  ) {}
  logoTitle = '<MJ>';
  moreDropdown = [
    // {
    //   name : 'Your Plans',
    //   link : '_my-plans'
    // },
    {
      name: 'All Subscription Plans',
      link: '_more',
    },
    {
      name: 'Login / Register',
      link: '_login',
    },
    {
      name: 'Activity',
      link: `_activity`,
    },
  ];
  ngOnInit(): void {
    this.getUserDetails();
    this.getCurrentURL();
    this.__router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getCurrentURL();
      });
  }
  selectedNavItem: any;
  menuItems = ['_hello', '_about-me', '_projects', '_contact-me']; //,'_more'
  openNav() {
    const div = document.getElementById('myNav');
    if (div) {
      div.style.height = '100%';
    }
  }
  getUserDetails() {
    this.userDetails = this.sharedService.getUserInfo();
    this.apiService.getUserDetailsByAccessToken().subscribe((res: any) => {
      this.userDetails.user = res[0];
    });
  }
  openMoreDropdownMenu(link: string) {
    switch (link) {
      case '_login':
        sessionStorage.clear();
        this.__router.navigate([`/${link}`]);
        break;
      case '_activity':
        if (this.userDetails?.user?.plan_id)
          this.__router.navigate([
            `/${link}/${this.userDetails?.user?.plan_id}`,
          ]);
        break;
      case '_more':
        debugger;
        this.__router.navigate([`/${link}`]);
        break;

      default:
        break;
    }
  }

  closeNav() {
    const div = document.getElementById('myNav');
    if (div) {
      div.style.height = '0%';
    }
  }

  selectNavItem(event: any) {
    this.__router.navigateByUrl(event);
    if (this.selectedNavItem === event.slice(1)) {
      this.selectedNavItem = event.slice(1);
    }
    this.closeNav();
  }
  getCurrentURL() {
    this.selectedNavItem = this.__router.url.slice(1);
    if (this.selectedNavItem.match('_about-me')) {
      this.selectedNavItem = '_about-me';
    }
  }
}

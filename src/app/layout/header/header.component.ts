import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private __router : Router){}
  logoTitle = '<MJ>';
  ngOnInit(): void {
    this.getCurrentURL();
    this.__router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getCurrentURL();
      });
  }
  selectedNavItem :any;
  menuItems = ['_hello', '_about-me', '_projects', '_contact-me'];
  openNav() {
    const div = document.getElementById('myNav');
    if (div) {
      div.style.height = '100%';
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

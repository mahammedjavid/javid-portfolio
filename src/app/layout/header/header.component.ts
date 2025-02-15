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
  logoTitle = 'javid';
  ngOnInit(): void {
    this.getCurrentURL();
    this.__router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getCurrentURL();
      });
  }
  selectedNavItem :any;
  menuItems = [{name :'Hello' , route : '_hello'}, {name :'About Me' , route : '_about-me'}, {name :'Projects' , route : '_projects'}, {name :'Contact Me' , route : '_contact-me'}];
  isNavOpen = false;

  openNav() {
    this.isNavOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeNav() {
    this.isNavOpen = false;
    document.body.style.overflow = 'auto';
  }

  selectNavItem(item: string) {
    this.selectedNavItem = item;
    this.closeNav();
    this.__router.navigate([`/${item}`]);
  }
  getCurrentURL() {
    this.selectedNavItem = this.__router.url.slice(1);
    if (this.selectedNavItem.match('_about-me')) {
      this.selectedNavItem = '_about-me';
    }
  }

  getIconForItem(item: string): string {
    switch (item) {
      case '_hello':
        return 'home';
      case '_about-me':
        return 'person';
      case '_projects':
        return 'code';
      case '_contact-me':
        return 'mail';
      default:
        return 'chevron_right';
    }
  }
}

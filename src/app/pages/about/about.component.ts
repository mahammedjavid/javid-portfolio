import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { filter } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  constructor(private __router: Router,private loader : NgxUiLoaderService) {}
  dynamicFolderOpen = {
    education: false,
    experience: false,
    bio: false,
    achivement: false,
    interest: false,
    skills : false
  };
  selectedSubNavItem: any;
  ngOnInit(): void {
    this.loader.start()
    this.getCurrentURL();
    this.__router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getCurrentURL();
      });
      if(window.innerWidth < 640){
        this.collapsed = false
      }
  }

  selectNavItem(event: any) {
    this.__router.navigate([`_about-me/${event}`]);
    if (this.selectedSubNavItem === event.slice(1)) {
      this.selectedSubNavItem = event.slice(1);
    }
  }
  getCurrentURL() {
    console.log(this.__router.url.slice(1));
    const route = this.__router.url.slice(1);
    this.selectedSubNavItem = route.split('_about-me/')[1];
    this.getDummyFunctionName();
    console.log(this.selectedSubNavItem);
  }
  DummyFunctionName: any;
  getDummyFunctionName() {
    this.loader.stop()
    switch (this.selectedSubNavItem) {
      case 'personal-info':
        this.dynamicFolderOpen.bio = true;
        this.DummyFunctionName = 'personalInfo';
        break;
      case 'summary':
        this.dynamicFolderOpen.bio = true;
        this.DummyFunctionName = 'summaryData';
        break;
      case 'experience':
        this.dynamicFolderOpen.experience = true;
        this.DummyFunctionName = 'experienceData';
        break;
      case 'education':
        this.dynamicFolderOpen.education = true;
        this.DummyFunctionName = 'educationData';
        break;
      case 'achivement':
        this.dynamicFolderOpen.achivement = true;
        this.DummyFunctionName = 'achivementData';
        break;
        case 'interest':
          this.dynamicFolderOpen.interest = true;
          this.DummyFunctionName = 'interestData';
          break;
          case 'skills':
            this.dynamicFolderOpen.skills = true;
            this.DummyFunctionName = 'skillData';
            break;
      default:
        break;
    }
  }
  open_curly_braces = '{';
  openBraces = '(';
  closeBraces = ')';
  close_curly_braces = '}';
  collapsed = true
  toggleSideBar(){
    this.collapsed = !this.collapsed
    const sidebar = document.querySelector('.sidebar')
    sidebar?.classList.toggle('collapsed')
  }
}

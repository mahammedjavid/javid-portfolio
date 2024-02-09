import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0.1 }),
        animate('400ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit{
  techStack :any
  allProjects:any
  constructor(private sharedService:SharedService,private loader : NgxUiLoaderService){}
  ngOnInit(): void {
    this.loader.start()
    this.getAllProject()
    this.getTechStack()
    this.loader.stop()
  }
  getAllProject(){
    this.allProjects = this.sharedService.getProjects()
  }
  getTechStack(){
    this.techStack = this.sharedService.getSkills()
  }

}

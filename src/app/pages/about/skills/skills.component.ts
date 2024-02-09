import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any;
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.getSkills();
  }
  getSkills() {
    this.skills = this.sharedService.getSkills();
  }
}

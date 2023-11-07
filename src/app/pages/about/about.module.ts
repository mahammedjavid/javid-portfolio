import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { EducationComponent } from './education/education.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { InterestComponent } from './interest/interest.component';
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { AchivementComponent } from './achivement/achivement.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [AboutComponent, EducationComponent, PersonalInfoComponent, InterestComponent, SummaryComponent, ExperienceComponent, AchivementComponent, SkillsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

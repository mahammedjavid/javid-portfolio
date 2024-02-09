import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupActivityRoutingModule } from './group-activity-routing.module';
import { GroupActivityComponent } from './group-activity.component';
import { FormsModule } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';


@NgModule({
  declarations: [
    GroupActivityComponent
  ],
  imports: [
    CommonModule,
    GroupActivityRoutingModule,
    FormsModule,
    PickerComponent
  ],
  providers : [SocketService]
})
export class GroupActivityModule { }

import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';
import { DataCollectionFormComponent } from 'src/app/shared/components/data-collection-form/data-collection-form.component';
import { SharedService } from 'src/app/shared/shared.service';
import {
  DataCollectionFormInitialState,
  DataCollectionInput,
} from 'src/app/types/types';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  planId: string = '';
  modalRef?: BsModalRef;
  userDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private apiService: ApiService,
    private router: Router,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.planId = this.activatedRoute.snapshot.queryParams['id'];
    this.getTheUserDetails();
  }
  getTheUserDetails() {
    this.userDetails = this.sharedService.getUserInfo()
  }
  openModal() {
    const form_requirement: DataCollectionFormInitialState = {
      fields: [
        {
          slag: 'roomId',
          isRequired: true,
          name: 'Room ID',
          input_type: 'text',
          list: [],
        },
      ],
      title: 'Enter ROOM ID to Join the community group',
      cancel_title: 'Cancel',
      submit_title: 'Submit',
    };
    this.modalRef = this.modalService.show(DataCollectionFormComponent, {
      initialState: form_requirement,
    });
    this.modalRef.content.OnClose.subscribe((res: any) => {
      if (res) {
        this.checkThePlanAccess(res.form);
      }
    });
  }
  checkThePlanAccess(data: any) {
    const user_details = this.sharedService.getUserInfo();
    this.apiService
      .getUserGroup(user_details.user.user_id)
      .subscribe((res: any) => {
        const groupExist = res.find(
          (group: any) => group.group_id == data.get('roomId').value
        );
        if (groupExist) {
          this.router.navigate([`_activity/${this.userDetails?.user?.plan_id}`]);
          return;
        }
        alert(
          'You dont have any group attached to your account , Please apply for the subscription again'
        );
      });
  }
}

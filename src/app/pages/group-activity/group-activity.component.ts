import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';
import { SocketService } from 'src/app/services/socket.service';
import { DataCollectionFormComponent } from 'src/app/shared/components/data-collection-form/data-collection-form.component';
import { SharedService } from 'src/app/shared/shared.service';
import {
  DataCollectionFormInitialState,
  messageType,
} from 'src/app/types/types';
const newSocket = new SocketService();
@Component({
  selector: 'app-group-activity',
  templateUrl: './group-activity.component.html',
  styleUrls: ['./group-activity.component.scss'],
})
export class GroupActivityComponent implements OnInit {
  message = '';
  userId: string = '';
  userDetails: any;
  roomInfo: any = {
    roomId: '',
    roomName: '',
  };
  userCount: any = 0;
  modalRef?: BsModalRef;
  showEmojiTab = false;
  media_url = '';
  allGroups: any = [];
  constructor(
    private sharedService: SharedService,
    private socketService: SocketService,
    private modalService: BsModalService,
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.getTheUserFromSession();
  }
  toggleEmojiTab() {
    this.showEmojiTab = !this.showEmojiTab;
  }
  socketConnection() {
    this.socketService.joinCommunity(
      this.roomInfo.roomId,
      this.userDetails?.user?.user_id?.toString()
    );

    this.socketService.onUserJoined().subscribe((userId) => {
      console.log('User joined:', userId);
      this.userId = userId;
    });

    this.socketService.getNewMessage().subscribe((message: string) => {
      console.log('dayyyyas', message);
      this.messageData.push(message);
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    });
    this.socketService.onReceiveMessage().subscribe((data: any) => {
      console.log('Received message:', data);
      this.messageData = data;
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);

    });
    this.socketService.geUserCount().subscribe((data: any) => {
      console.log('Received user count:', data);
      this.userCount = data;
    });
  }

  sendMessage() {
    this.showEmojiTab = false;
    const messageInfo: messageType = {
      user_id: this.userDetails?.user?.user_id,
      group_id: this.roomInfo.roomId,
      message: this.message,
      media_url: this.media_url,
    };

    // Send a message to the community group and handle acknowledgment
    this.socketService.sendMessage(messageInfo);
    this.message = '';
    this.media_url = '';
  }

  messageData: any = [];

  getTheUserFromSession() {
    this.userDetails = this.sharedService.getUserInfo();
    this.getTheUserGroups();
  }
  getTheUserGroups() {
    const user_details = this.sharedService.getUserInfo();
    this.apiService
      .getUserGroup(user_details.user.user_id)
      .subscribe((res: any) => {
        this.allGroups = res;
        this.roomInfo.roomId = res[0].group_id;
        this.socketConnection();
      });
  }
  addEmoji(ev: any) {
    this.message += ev.emoji.native;
  }
  addFileUrl() {
    const form_requirement: DataCollectionFormInitialState = {
      fields: [
        {
          slag: 'file_url',
          isRequired: true,
          name: 'File URL',
          input_type: 'text',
          list: [],
        },
      ],
      title: 'Please Paste the URL of the file',
      cancel_title: 'Cancel',
      submit_title: 'Submit',
    };
    this.modalRef = this.modalService.show(DataCollectionFormComponent, {
      initialState: form_requirement,
    });
    this.modalRef.content.OnClose.subscribe((res: any) => {
      if (res) {
        this.media_url = res.form.get('file_url').value;
        this.sendMessage();
      }
    });
  }

  downloadImage(url: string): void {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = url;
    link.download = url.substring(url.lastIndexOf('/') + 1); // Extract filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  createGroupForm(all_user : any[]  , other_users: any[]) {
    const form_requirement: DataCollectionFormInitialState = {
      fields: [
        {
          slag: 'group_name',
          isRequired: true,
          name: 'Group Name',
          input_type: 'text',
          list: [],
        },
        {
          slag: 'file_url',
          isRequired: true,
          name: 'File URL',
          input_type: 'checkbox',
          list : other_users,
        },
      ],
      title: 'Please select user and enter group name',
      cancel_title: 'Cancel',
      submit_title: 'Submit',
    };
    this.modalRef = this.modalService.show(DataCollectionFormComponent, {
      initialState: form_requirement,
    });
    this.modalRef.content.OnClose.subscribe((res: any) => {
      if (res) {
        console.log(res.checkbox_result);
        const group_name = res.form.get('group_name').value;
        this.createGroup([...res.checkbox_result , this.userId], group_name, all_user);
      }
    });
  }
  getAllUser(type: string) {
    if(!this.userDetails.user.plan_id || this.userDetails.user.plan_id == 1) {
      alert("Upgrade to Pro or Ultimate plan to acces this feature")
      return
    }
    this.apiService.getAllUSer().subscribe((res: any) => {
      const all_users = res
      const other_users = res.filter((user:any)=> user.user_id != this.userId)
      switch (type) {
        case 'individual':
          this.newChatForm(all_users , other_users);
          break;
        case 'group':
          this.createGroupForm(all_users , other_users);
          break;

        default:
          break;
      }
    });
  }
  newChatForm(all_users: any[] ,other_users : any[] ) {
    const form_requirement: DataCollectionFormInitialState = {
      fields: [
        {
          slag: 'user',
          isRequired: true,
          name: 'Select the user',
          input_type: 'single-select',
          list : other_users,
        },
      ],
      title: 'Please select user',
      cancel_title: 'Cancel',
      submit_title: 'Submit',
    };
    this.modalRef = this.modalService.show(DataCollectionFormComponent, {
      initialState: form_requirement,
    });
    this.modalRef.content.OnClose.subscribe((res: any) => {
      if (res) {
        console.log(res.form);
        const selected_user = res.form.get('user').value;
        const group_name = all_users.find(
          (user: any) => user.user_id == selected_user
        ).name;
        this.createGroup([selected_user, this.userId], group_name, all_users);
      }
    });
  }
  createGroup(users: any[], group_name: string, all_user: any[]) {
    const payload = {
      group_name,
    };
    this.apiService.createGroup(payload).subscribe((res: any) => {
      this.createGroupWithUsers(users, res.group_id, all_user);
    });
  }
  createGroupWithUsers(users: any[], group_id: any, all_user: any[]) {
    console.log(all_user.find((user: any) => user.user_id == users[0]))
    const data = users.map((us: any) => {
      const  selectedUser = all_user.find((user: any) => user.user_id == us)
      return {
        user_id: us,
        user_name: selectedUser.name,
        group_id,
      };
    });
    console.log(data);
    this.apiService.addUserToGroup(data).subscribe((res: any) => {
      console.log(res);
      this.getTheUserGroups();
    });
    console.log(data);
  }
  selectGroup(group: any) {
    const selected_group = this.allGroups.find(
      (gr: any) => gr.group_id == group.group_id
    );
    console.log(selected_group);
    this.roomInfo.roomName = selected_group.group_info.group_name;
    this.roomInfo.roomId = selected_group.group_id;
    this.socketService.joinCommunity(
      this.roomInfo.roomId,
      this.userDetails?.user?.user_id?.toString()
    );
  }
  scrollToBottom(): void {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
}

import { Injectable } from '@angular/core';
import { Socket } from 'socket.io-client';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { messageType } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  public socket!: Socket;
  constructor() {
    this.connectToSocket();
  }
  connectToSocket() {
    this.socket = io('http://localhost:3300');
    this.socket.on('connect', () => {
      console.log('Connected to community socket');
    });
  }

  joinCommunity(groupId: string, userId: string) {
    this.socket.emit('joinCommunity', groupId, userId);
  }

  sendMessage(messageInfo: messageType) {
    this.socket.emit(
      'sendMessage',
      messageInfo.group_id,
      messageInfo.user_id,
      messageInfo.message,
      messageInfo.media_url
    );
  }

  onUserJoined(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('userJoined', (userId: string) => {
        observer.next(userId);
      });
    });
  }

  onReceiveMessage(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('receiveMessage', (data: any) => {
        console.log('data is ', data);
        observer.next(data);
      });
    });
  }
  geUserCount(){
    return new Observable((observer) => {
      this.socket.on('GroupMemberCount', (data: any) => {
        console.log('data is ', data);
        observer.next(data);
      });
    });
  }
  getNewMessage() {
    return Observable.create((observer: any) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  };
}

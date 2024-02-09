import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal: any;

  constructor() {}

  setModal(modal: any) {
    this.modal = modal;
  }

  open() {
    if (this.modal) {
      this.modal.show();
    }
  }

  close() {
    if (this.modal) {
      this.modal.hide();
    }
  }
}

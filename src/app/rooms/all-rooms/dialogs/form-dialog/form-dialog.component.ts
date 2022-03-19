import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { RoomService } from '../../rooms.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Room } from '../../rooms.model';
import { formatDate } from '@angular/common';
import { I } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  roomForm: FormGroup;
  room: Room;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public roomService: RoomService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Room';
      this.room = data.room;
    } else {
      this.dialogTitle = 'New Room';
      this.room = new Room({});
    }
    this.roomForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      _id: [this.room._id],
      room_no: [this.room.room_no],
      room_type: [this.room.room_type],
      category: [this.room.category],
      // meal: [this.room.meal],
      room_capacity: [this.room.room_capacity],
      // phone: [this.room.phone],
      rent: [this.room.rent]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    console.log(this.action,69)
    if(this.action =='edit'){
     return this.roomService.updateRoom(this.roomForm.getRawValue());
    }
    this.roomService.addRoom(this.roomForm.getRawValue());
  }
}

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { BookingService } from '../../booking.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Booking } from '../../booking.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  bookingForm: FormGroup;
  booking: Booking;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public bookingService: BookingService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.booking.name;
      this.booking = data.booking;
    } else {
      this.dialogTitle = 'New Booking';
      this.booking = new Booking({});
    }
    this.bookingForm = this.createContactForm();
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
      id: [this.booking._id],
      // img: [this.booking.img],
      name: [this.booking.name],
      // email: [
      //   this.booking.email,
      //   [Validators.required, Validators.email, Validators.minLength(5)]
      // ],
      arrival_date: [
        formatDate(this.booking.arrival_date, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      departuer_date: [
        formatDate(this.booking.departuer_date, 'yyyy-MM-dd', 'en'),
        [Validators.required]
      ],
      gender: [this.booking.gender],
      contact_no: [this.booking.contact_no],
      status: [this.booking.status],
      payment: [this.booking.payment],
      balance_amount: [this.booking.balance_amount]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    if(this.action === 'edit'){
      let record = Object.assign(this.booking,this.bookingForm.getRawValue())
      this.bookingService.updateBookingStatus(record).subscribe((data)=>{
        console.log(data);
      })
      return
    }
    this.bookingService.addBooking(this.bookingForm.getRawValue());
  }
}

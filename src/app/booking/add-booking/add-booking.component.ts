import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../all-booking/booking.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.sass']
})
export class AddBookingComponent {
  bookingForm: FormGroup;
  selectedFile: File = null;
  availableRooms =[];
  constructor(
    private fb: FormBuilder,
    private hotel: BookingService
  ) {
    this.bookingForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      email: [
        '', [Validators.required, Validators.email]
      ],
      gender: ['', [Validators.required]],
      contact_no: ['', [Validators.required]],
      advance_amount: [''],
      arrival_date: ['', [Validators.required]],
      departuer_date: ['', [Validators.required]],
      total_persons: ['', [Validators.required]],
      room_type: ['', [Validators.required]],
      address: [''],
      uploadImg: [''],
      note: [''],
      company_name: [''], designation: [],
      nationality: [''],
      purpose_of_visit: [],
      arrived_by: [],
      proceeding_by: [],
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hotel.getAvailableRooms().subscribe((data) => {
      this.availableRooms =data.data;
    })
    
  }
  onSubmit() {
    console.log('Form Value', this.bookingForm.value);
    this.hotel.createBooking(this.bookingForm.value).subscribe((data) => {
      console.log(data);
    })
  };
  onFileSelected(event) {
    this.selectedFile = event.target.files[0]
  }
}

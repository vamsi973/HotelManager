import { formatDate } from '@angular/common';
export class Booking {
  _id: number;
  // img: string;
  name: string;
  email: string;
  arrival_date: string;
  departuer_date: string;
  gender: string;
  contact_no: string;
  room: {
    "_id": string,
    "room_no": string,
    "category": string,
    "rent": number,
    "room_type": string,
    "room_capacity": number
  };
  payment: string;
  status: string;
  balance_amount:number;
  constructor(booking) {
    {
      this._id = booking._id || this.getRandomID();
      // this.img = booking.avatar || 'assets/images/user/user1.jpg';
      this.name = booking.name || '';
      this.email = booking.email || '';
      this.arrival_date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.departuer_date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.gender = booking.gender || '';
      this.contact_no = booking.contact_no || '';
      this.room = {
        "_id": booking._id,
        "room_no": booking.room_no,
        "category": booking.category,
        "rent": booking.rent,
        "room_type": booking.room_type,
        "room_capacity": booking.room_capacity
      };
      this.payment = booking.payment || '';
      this.status = booking.status || '';
      this.balance_amount = booking.balance_amount || 0;
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}

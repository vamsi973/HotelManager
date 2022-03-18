import { formatDate } from '@angular/common';
export class Staff {
  _id: number;
  img: string;
  name: string;
  email: string;
  joining_date: string;
  address: string;
  contact_no: string;
  designation: string;
  salary: number;
  constructor(staff) {
    {
      this._id = staff._id || this.getRandomID();
      this.img = staff.avatar || 'assets/images/user/user1.jpg';
      this.name = staff.name || '';
      this.designation = staff.designation || '';
      this.email = staff.email || '';
      this.joining_date = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.address = staff.address || '';
      this.contact_no = staff.contact_no || '';
      this.salary = staff.salary || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}

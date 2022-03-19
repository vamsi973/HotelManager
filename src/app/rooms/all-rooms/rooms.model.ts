export class Room {
  _id: number;
  room_no: string;
  room_type: string;
  category: string;
  // meal: string;
  room_capacity: string;
  // phone: string;
  rent: string;
  constructor(room) {
    {
      this._id = room.id || this.getRandomID();
      this.room_no = room.room_no || '';
      this.room_type = room.room_type || '';
      this.category = room.category || '';
      this.room_capacity = room.room_capacity || '';
      this.rent = room.rent || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}

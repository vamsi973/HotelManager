import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from './rooms.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
export class RoomService {
  private readonly API_URL = 'assets/data/rooms.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Room[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  // getAllRooms(): void {
  //   this.httpClient.get<Room[]>(this.API_URL).subscribe(
  //     (data) => {
  //       this.isTblLoading = false;
  //       this.dataChange.next(data);
  //     },
  //     (error: HttpErrorResponse) => {
  //       this.isTblLoading = false;
  //       console.log(error.name + ' ' + error.message);
  //     }
  //   );
  // }
  // DEMO ONLY, you can find working methods below
  addRoom(room: Room): void {
    this.dialogData = room;
    this.createRoom(room).subscribe()
  }
  updateRoom(room: Room): void {
    this.dialogData = room;
    this.updateRoomDetails(room).subscribe();
  }
  deleteRoom(id: number): void {
    console.log(id);
    this.removeStaff(id).subscribe()
  }
  createRoom(roomDetails):Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/roomservice/add`, roomDetails)
  }

  getRoomsList():Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/roomservice/list`)
  }


  getAllRooms(): void {
    this.httpClient.get<Room[]>(`${environment.apiUrl}/roomservice/list`).subscribe(
      (data) => {
        this.isTblLoading = false;
        if(data['success']){
          this.dataChange.next(data['data']);
        }
        // this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }


  updateRoomDetails(staff): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/roomservice/update`, staff)
  }

  removeStaff(id): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/roomservice/remove`, { id: id })
  }

  removeSelectedRooms(rooms): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/roomservice/multipleRoomRecordsRemove`, rooms)
  }

}

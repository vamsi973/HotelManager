import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Staff } from './staff.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { I } from '@angular/cdk/keycodes';
@Injectable()
export class StaffService {
  private readonly API_URL = 'assets/data/staff.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Staff[]> = new BehaviorSubject<Staff[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) { }
  get data(): Staff[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  // getAllStaffs(): void {
  //   this.httpClient.get<Staff[]>(this.API_URL).subscribe(
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
  getAllStaffs(): void {
    this.httpClient.get(`${environment.apiUrl}/staff/list`).subscribe(
      (data) => {
        console.log(data, 37)
        this.isTblLoading = false;
        if (data['success']) {
          this.dataChange.next(data['data']);
        }

      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addStaff(staff: Staff): void {
    this.dialogData = staff;
    this.newStaffAdd(staff).subscribe();
  }
  updateStaff(staff: Staff): void {
    this.dialogData = staff;
    console.log("update staff record",staff)
    this.updateStaffDetails(staff).subscribe();
  }
  deleteStaff(id: number): void {
    this.removeStaff(id).subscribe();
  }
  newStaffAdd(staff): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/staff/add`, staff)
  }

  removeStaff(id): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/staff/remove`, { id: id })
  }

  updateStaffDetails(staff): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/staff/update`, staff)
  }
  
  removeSelectedStaff(staff): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/staff/multipleStafUsersRemove`, staff)
  }

  userAdd(staff): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/staff/addUser`, staff)
  }

  
}

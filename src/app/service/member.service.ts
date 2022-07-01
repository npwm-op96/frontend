import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MemberService {
  URL:string = 'http://localhost:5500/api/member/'
  constructor(private http: HttpClient) {

  }

   getMember() {
    return new Promise<void>((resolve, reject) => {
      this.http.get(this.URL).subscribe((result:any) => {
        return resolve(result)
      })
    })
  }
  deleteMember(id:any){
    console.log('id',id)
    return new Promise<void>((resolve, reject) => {
      this.http.delete(`${this.URL}${id}`).subscribe((result:any) => {
        return resolve(result)
      })
    })
  }
  editMember(id:any,data:any){
    console.log('id',id)
    return new Promise<void>((resolve, reject) => {
      this.http.put(`${this.URL}${id}`,data).subscribe((result:any) => {
        return resolve(result)
      })
    })
  }
  saveMember(data:any){
    console.log('data',data)
    return new Promise<void>((resolve, reject) => {
      this.http.post(`${this.URL}`,data).subscribe((result:any) => {
        return resolve(result)
      })
    })
  }
}

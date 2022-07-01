import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  URL: string = 'http://localhost:5500/api/address/';
  constructor(private http: HttpClient) {}
  getProvince() {
    return new Promise<void>((resolve, reject) => {
      this.http.get(`${this.URL}/getProvince`).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
  getKhet(provinceId:any) {
    console.log('getKhet',provinceId)
    let params = new HttpParams().set("provinceId",provinceId)

    return new Promise<void>((resolve, reject) => {
      this.http.get(this.URL+'/getDistrict',{params}).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
  getZipcode(districtId:any,provinceId:any) {
    console.log('getKhwang',districtId)
    let params = new HttpParams().set("provinceId",provinceId).set('districtId',districtId)
    return new Promise<void>((resolve, reject) => {
      this.http.get(this.URL+'/getZipcode',{params}).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
  getKhwang(districtId:any,provinceId:any) {
    console.log('getKhwang',districtId)
    let params = new HttpParams().set("provinceId",provinceId).set('districtId',districtId)
    return new Promise<void>((resolve, reject) => {
      this.http.get(this.URL+'/getSub_District',{params}).subscribe((res: any) => {
        resolve(res);
      });
    });
  }
}

import { AddressService } from './../../service/address.service';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-createorupdatemember',
  templateUrl: './createorupdatemember.component.html',
  styleUrls: ['./createorupdatemember.component.css'],
})
export class CreateorupdatememberComponent implements OnInit {
  userForm: FormGroup;
  data: any = {}
  id: any = null;
  Province: any = [];
  Khet: any = [];
  Khwang: any = [];
  Zipcode: any = [];

  provinceId:any 
  khetId:any


  

  constructor(private addressService:AddressService ,private memberService: MemberService ,private fb: FormBuilder, private route: ActivatedRoute) {
    this.data = this.route.snapshot.params
    this.id = this.data.id
    console.log('data',this.data)
    this.userForm = this.fb.group({
      username: [this.data ? this.data.username : '', [Validators.required]],
      firstname: [this.data ? this.data.firstname : '', [Validators.required]],
      lastname: [this.data ? this.data.lastname : '', [Validators.required]],
      email: [
        this.data ? this.data.email : '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      Province: [this.data ? this.data.Province : '', [Validators.required]],
      Khet: [this.data ? this.data.District : '', [Validators.required]],
      Khwang: [this.data ? this.data.Sub_District : '', [Validators.required]],
      Zipcode: [this.data ? this.data.Zipcode : '', [Validators.required]],

    });
  }

  ngOnInit(): void {

    this.getAddress();

  }
  async getAddress() {
    this.Province = await this.addressService.getProvince()
  }

  saveUser() {
    const value:any = this.userForm.value
    console.log(this.id)
    if(this.id!=null){
      console.log('value update',value)
      this.memberService.editMember(this.id,value)

    }else{
      console.log('value create',value)
      this.memberService.saveMember(value)

    }
    console.log('saveUser');
  }
  async selectProvince(event:any){
   this.provinceId = event.target.value
    console.log('selectProvince', this.provinceId )
    this.Khet = await this.addressService.getKhet( this.provinceId )
  }
  async selectKhet(event:any){
    this.khetId = event.target.value
    this.Khet = await this.addressService.getKhet( this.provinceId )
    this.Zipcode = await this.addressService.getZipcode(this.khetId,this.provinceId)
    this.Khwang = await this.addressService.getKhwang(this.khetId,this.provinceId)
    //  console.log('selectKhet',this.khetId)
   }
}

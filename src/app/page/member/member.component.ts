import { Component, OnInit } from '@angular/core';
// import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as _ from 'lodash';

import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  results: any = [];
  Search: any = '';
  constructor(private memberService: MemberService, private router: Router) {}
  ngOnInit(): void {
    if (this.Search == '') {
      this.getmember();
    }
  }
  async getmember() {
    this.results = await this.memberService.getMember();
  }
  editUser(item:any=null) {
    console.log('editUser',item);
    this.router.navigate(['addmember',item]);
  }
  async deleteUser(item:any) {
    let id:any = item.id
    console.log('deleteUser');
   await  this.memberService.deleteMember(id)
   await this.getmember()
  }
  creteUser(data:any = null) {
    this.router.navigate(['addmember']);

    console.log('creteUser');
  }
  Searchs() {
    console.log('Search', this.Search);
    if (this.Search != '') {
      this.results = _.filter(this.results, (item) => {
        return (
          item.firstname.includes(this.Search) ||
          item.lastname.includes(this.Search) ||
          item.username.includes(this.Search)||
          item.Create_By.includes(this.Search)
          // item.id.includes(this.Search)
        );
      });

      // console.log('match',match)
      // this.results.push(match)
    } else {
      this.getmember();
    }
  }
}

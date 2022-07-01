import { CreateorupdatememberComponent } from './page/createorupdatemember/createorupdatemember.component';
import { MemberComponent } from './page/member/member.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'member', component: MemberComponent },
  { path: 'addmember', component: CreateorupdatememberComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

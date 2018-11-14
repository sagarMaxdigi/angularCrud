import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  posts: any;
    constructor( private UserService: UserService) { }
    onDelete(ID:number){
      this.posts = this.UserService.onDeleteData(ID).subscribe((res ) => {
        this.posts=res;
        if(this.posts.msg=='OK'){
          alert("Record deleted success");
          this.getAllUsers();
        }
      });
    }
    getAllUsers():void{
      this.posts = this.UserService.getListData().subscribe((res ) => {
          this.posts = res;
          
      });
  }
ngOnInit() {
  this.getAllUsers();
}
onDeleteUser(ID:number){
  this.onDelete(ID);
}
}

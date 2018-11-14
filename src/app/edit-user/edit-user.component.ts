import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  route: string;
  userID :string;
  editForm: FormGroup;
    submitted = false;
    get f() { return this.editForm.controls; }
    posts: any;
    firstParameter = ''; secondParameter = ''; thirdParameter = ''; forthParameter = '';
  constructor(private formBuilder: FormBuilder, private UserService: UserService,location: Location, router: Router) { 
    router.events.subscribe((val) => {
      this.userID = location.path().substring(location.path().lastIndexOf("/") + 1, location.path().length);
    });
   
  }
  
  saveEditData(firstParameter,secondParameter,thirdParameter,forthParameter):void{
    this.posts = this.UserService.saveUserEditData(this.userID,firstParameter,secondParameter,thirdParameter,forthParameter).subscribe((res ) => {
        this.posts = res;
        // this.rouer.navigate(['/UserListComponent']);
        // console.log(this.posts);
        // if(this.posts){
          
        // }
    });
  }
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.editForm.reset();
    this.UserService.getEditUser(this.userID).subscribe((res ) => {
      this.posts=res;
      console.log(this.posts);
    });
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.firstParameter = this.editForm.value.firstName;
    this.secondParameter= this.editForm.value.lastName;
    this.thirdParameter= this.editForm.value.email;
    this.forthParameter= this.editForm.value.password;
    this.saveEditData(this.firstParameter,this.secondParameter,this.thirdParameter,this.forthParameter);
  }   
}
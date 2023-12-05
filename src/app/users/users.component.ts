import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users: any;
  message: any;

  service = inject(UsersService)


  ngOnInit(){
    // this.users =  this.service.getUsers();

    // this.service.getUsers().subscribe({
    //   next: response => this.users = response,
    //   error: err => alert(err),
    //   complete: () => alert("Data Fetch Completed...")
    // });
  }

  postData(){

    const data = {
      name: "morpheus",
      job: "leader"
    }

    this.service.postUser(data).subscribe({
      next: data => this.message = data,
      error: err => alert(err),
    })
  }

}

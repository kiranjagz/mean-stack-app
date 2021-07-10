import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public isLoading = false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm){
    if (form.invalid){
      return;
    }

    let email = form.value.email;
    let password = form.value.password;
    this.isLoading = true;
    this.authService.createUser(email, password);
  }

}

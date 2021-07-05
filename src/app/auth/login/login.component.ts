import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
    if (form.invalid){
      return;
    }

    let email = form.value.email;
    let password = form.value.password;

    this.authService.login(email, password);
  }
}

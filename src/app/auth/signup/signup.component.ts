import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  public isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) { }


  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
      this.isLoading = false;
    });
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

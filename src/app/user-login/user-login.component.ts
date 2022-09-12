import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public loginForm: FormGroup;
  private defaultEmail: string = "cosictomica@gmail.com";
  private defaultPassword: string = "proba";

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, this.userLoginValidator.bind(this)]),
      'password': new FormControl(null, [Validators.required, this.userLoginValidator.bind(this)])
    });
  }

  userLoginValidator(control: FormControl): { [s: string]: boolean } {
    if (this.defaultEmail.indexOf(control.value) && this.defaultPassword.indexOf(control.value)) {
      return { 'correctUserCredentials': true };
    }
    return null;
  }

  login() {
    this.router.navigate(['partners/edit']);
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname = 'jaswanth';
  middlename = 'reddy';
  lastname = 'kallem';
  username = 'jaswanth0050';
  password = 'jesse';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // Dependency Injection
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleSignup() {
    console.log(this.firstname);
    console.log(this.middlename);
    console.log(this.lastname);
    if (this.firstname === 'jaswanth' && this.middlename === 'reddy' && this.lastname === 'kallem' && this.password === 'jesse') {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.firstname]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    // console.log(this.password);
  }
  handleLogin() {
    console.log(this.username);
    // if (this.username === 'jaswanth0050' && this.password === 'jesse') {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
    // Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    // console.log(this.password);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    // TODO Add user validation logic
    this.router.navigate(['/master-list']);
  }

}

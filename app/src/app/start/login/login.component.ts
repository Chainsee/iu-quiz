import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  onLogin() {
    this.http
      .post('http://localhost:5050/posts/login', this.loginObj)
      .subscribe(
        (response: any) => {
          if (response && response.token) {
            localStorage.setItem('jwtToken', response.token);
            this.router.navigate(['/home']);
          } else {
          }
        },
        (error) => {
          alert('Fehler beim Login');
        }
      );
  }
}

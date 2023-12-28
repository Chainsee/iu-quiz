import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';

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

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if(localStorage.getItem('jwtToken')){
      this.router.navigate(['/home']);
    }
  }
  onLogin() {
    this.http
      .post('http://localhost:5050/posts/login', this.loginObj)
      .subscribe(
        (response: any) => {
          if (response && response.jwtToken) {
            localStorage.setItem('jwtToken', response.jwtToken);
            this.snackbar.open('Login erfolgreich', 'Schließen', {
              duration: 2000,
            });
            this.authService.setCurrentUser(this.loginObj.username);
            this.router.navigate(['/home']);
          } else {
          }
        },
        (error) => {
          this.snackbar.open('Login fehlgeschlagen', 'Schließen', {
            duration: 2000,
          });
        }
      );
  }
}

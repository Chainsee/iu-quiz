import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSignUp() {
    this.http
      .post('http://localhost:5050/posts/register', this.signupObj)
      .subscribe(
        (response) => {
          this.router.navigate(['/home']);
        },
        (error) => {
          this.snackbar.open('Registrierung fehlgeschlagen', 'Schließen', {
            duration: 2000,
          });
        }
      );
  }
}

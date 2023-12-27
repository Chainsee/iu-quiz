import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}

  canActivate(): Observable<boolean> {
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      return this.http.get('http://localhost:5050/posts/validate', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .pipe(
          map(() => true),
          catchError(() => {
            this.router.navigate(['/login']);
            return of(false);
          })
        );
    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}

  canActivate(): Observable<boolean> {
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
      console.log(`Sending request with JWT token: ${jwtToken}`);
      return from(
        fetch('http://localhost:5050/posts/validate', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
      ).pipe(
        map(response => {
          if (response.status === 200) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }),
        catchError(error => {
          console.error(error);
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }

  // async canActivate(): Promise<Observable<boolean>> {
  //   const jwtToken = localStorage.getItem('jwtToken');

  //   if (jwtToken) {
  //     async () => {
  //       let response = await fetch('http://localhost:5050/posts/validate', {
  //         headers: {
  //           Authorization: `Bearer ${jwtToken}`,
  //         },
  //       });
  //       if (response.status === 200) {
  //         return of(true);
  //       } else {
  //         this.router.navigate(['/login']);
  //         return of(false);
  //       }
  //     };
  //   }
  //   this.router.navigate(['/login']);
  //   return of(false);
  // }
}

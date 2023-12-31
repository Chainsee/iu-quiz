import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss',
})
export class GlobalHeaderComponent {
  constructor(private router: Router) {}

  jwtToken = localStorage.getItem('jwtToken');
  showProfile() {
    console.log('showProfile');
  }

  showFriends() {
    console.log('showFriends');
  }

  fragenkatalog(){
    this.router.navigate(['/fragenkatalog']);
  }

  abmelden(){
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }
}

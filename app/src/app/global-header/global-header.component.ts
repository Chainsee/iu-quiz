import { Component } from '@angular/core';
import { AuthGuard } from '../../services/authGuard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.scss',
})
export class GlobalHeaderComponent {
  jwtToken!: Observable<boolean>;
  constructor(public authGuard: AuthGuard) {
    this.jwtToken = authGuard.canActivate();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from '@auth0/auth0-angular';
import { RouterLink, RouterLinkActive } from '@angular/router'; //Start mit Register und Login verbinden

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink, RouterLinkActive], //Start mit Register und Login verbinden RouterLink, RouterLinkActive
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
}

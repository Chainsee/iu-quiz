import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { RegisterComponent } from './start/register/register.component'; //register verbinden
import { LoginComponent } from './start/login/login.component'; //login verbinden

export const routes: Routes = [
  {path: '', redirectTo: 'game', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'register', component: RegisterComponent}, //register verbinden
  {path: 'login', component: LoginComponent} //login verbinden

];

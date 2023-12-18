import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { RegisterComponent } from './start/register/register.component';
import { LoginComponent } from './start/login/login.component';
import { FragenkatalogComponent } from './Fragenkatalog/fragenkatalog.component' ;

export const routes: Routes = [
  {path: '', redirectTo: 'fragekatalog', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'fragekatalog', component: FragenkatalogComponent}

];

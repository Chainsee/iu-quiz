import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
<<<<<<< HEAD
import { RegisterComponent } from './start/register/register.component'; //register verbinden
import { LoginComponent } from './start/login/login.component'; //login verbinden
=======
import { FragenkatalogComponent } from './Fragenkatalog/fragenkatalog.component' ;
>>>>>>> ad2b20f2ef1a47e8ce9771bfd5306c3f32ff394c

export const routes: Routes = [
  {path: '', redirectTo: 'fragekatalog', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GameComponent},
<<<<<<< HEAD
  {path: 'register', component: RegisterComponent}, //register verbinden
  {path: 'login', component: LoginComponent} //login verbinden
=======
  {path: 'fragekatalog', component: FragenkatalogComponent}
>>>>>>> ad2b20f2ef1a47e8ce9771bfd5306c3f32ff394c

];

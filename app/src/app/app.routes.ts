import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { RegisterComponent } from './start/register/register.component';
import { LoginComponent } from './start/login/login.component';
import { QuestionsComponent } from './fragenkatalog/questions.component' ;
import { CategoryComponent } from './game/category/category.component';
import { EditQuestionsComponent } from './fragenkatalog/edit-questions/edit-questions.component';

const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'game/:category', component: GameComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'fragenkatalog', component: QuestionsComponent},
  {path: 'fragenbearbeiten/:category', component: EditQuestionsComponent},
  {path: 'auswahl', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

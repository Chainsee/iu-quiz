import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DBService } from '../services/db.service';
import { AppRoutingModule } from './app.routes';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './fragenkatalog/questions.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './start/header/header.component';
import { FooterComponent } from './start/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryComponent } from './game/category/category.component';
import { DialogComponent } from './game/dialog/dialog.component';
import { QuestionDialogComponent } from './fragenkatalog/question-dialog/question-dialog.component';
import { EditQuestionsComponent } from './fragenkatalog/edit-questions/edit-questions.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    QuestionsComponent,
    GameComponent,
    CategoryComponent,
    DialogComponent,
    QuestionDialogComponent,
    EditQuestionsComponent
  ],
  providers: [DBService],
  bootstrap: [AppComponent],
})
export class AppModule { }

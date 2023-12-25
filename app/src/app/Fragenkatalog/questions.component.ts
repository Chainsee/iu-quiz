import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';


@Component({
  selector: 'app-fragenkatalog',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  constructor(private dialog: MatDialog) { }
  addCategory() {
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
    });
  }
  selectCategory() {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
    });
  }
}

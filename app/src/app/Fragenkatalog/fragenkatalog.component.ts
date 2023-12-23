import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';


@Component({
  selector: 'app-fragenkatalog',
  templateUrl: './fragenkatalog.component.html',
  styleUrl: './fragenkatalog.component.scss'
})
export class FragenkatalogComponent {
  constructor(private dialog: MatDialog) { }
  addCategory() {
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
    });
  }
}

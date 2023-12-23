import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrl: './question-dialog.component.scss'
})
export class QuestionDialogComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<QuestionDialogComponent>,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      categoryName: '',});
  }

  save(){
    if (this.form.get('categoryName')) {
      const categoryName = this.form.get('categoryName')?.value;
      let posts = async () => {
        let response = await fetch('http://localhost:5050/posts/getKat?kat=' + category);
    }
  }

  back() {
    this.dialogRef.close();
  }
}

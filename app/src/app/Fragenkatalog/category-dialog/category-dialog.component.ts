import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrl: './category-dialog.component.scss'
})
export class CategoryDialogComponent {
  form: FormGroup;
  categories: any;
  selectedCategory: any;
  async ngOnInit() {
    let posts = async () => {
      let response = await fetch('http://localhost:5050/posts/getKategorien');
      let results = await response.json();
      return results;
    };
    this.categories = await posts();
  }


  constructor(
    private dialogRef: MatDialogRef<CategoryDialogComponent>,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group({
        categoryName: '',
      });
    }

    getCategory() {
      this.router.navigate(['/fragenbearbeiten', this.selectedCategory]);
      this.dialogRef.close();
    }

  back() {
    this.dialogRef.close();
  }
}

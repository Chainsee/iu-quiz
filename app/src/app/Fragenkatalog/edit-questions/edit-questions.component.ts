import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrl: './edit-questions.component.scss',
})
export class EditQuestionsComponent {
  message: any;
  choosenCategory: any;
  form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    let category = this.route.snapshot.paramMap.get('category');
    let posts = async () => {
      let response = await fetch(
        'http://localhost:5050/posts/getKat?kat=' + category
      );
      let results = await response.json();
      return results;
    };
    this.form = this.formBuilder.group({
      frage: '',
      antwort1: '',
      antwort2: '',
      antwort3: '',
      antwort4: '',
      korrekteAntwort: '',
    });
    this.choosenCategory = category;
    this.message = await posts();
  }

  fillForm(item: any): void {
    this.form.patchValue({
      frage: item.question,
      antwort1: item.answer1,
      antwort2: item.answer2,
      antwort3: item.answer3,
      antwort4: item.answer4,
      korrekteAntwort: item.correctAnswer,
    });
  }

  onSubmit(){

  }

  loeschen(){

  }
}

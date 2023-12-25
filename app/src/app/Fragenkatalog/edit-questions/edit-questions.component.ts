import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrl: './edit-questions.component.scss',
})
export class EditQuestionsComponent {
  message: any;
  choosenCategory: any;
  formArray!: FormArray;
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
      console.log(results);
      return results;
    };
    this.message = await posts();
    this.choosenCategory = category;
    this.formArray = this.formBuilder.array([]);
    this.message.forEach((item:any) => {
      const group = this.formBuilder.group({
        frage: [item.frage],
        antwort1: [item.antworten.antwort1],
        antwort2: [item.antworten.antwort2],
        antwort3: [item.antworten.antwort3],
        antwort4: [item.antworten.antwort4],
        korrekteAntwort: [item.korrekteAntwort],
      });
      this.formArray.push(group);

      this.form = new FormGroup({
        frage: new FormControl(''),
        antwort1: new FormControl(''),
        antwort2: new FormControl(''),
        antwort3: new FormControl(''),
        antwort4: new FormControl(''),
        korrekteAntwort: new FormControl(''),
      });
    });
  }

  getFormGroup(index: number): FormGroup {
    return this.formArray.controls[index] as FormGroup;
  }

  onSubmit(){

  }

  loeschen(){

  }
}

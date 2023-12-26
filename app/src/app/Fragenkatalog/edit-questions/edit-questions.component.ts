import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrl: './edit-questions.component.scss',
})
export class EditQuestionsComponent {
  message: any;
  choosenCategory: any;
  formArray!: FormArray;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    let category = this.route.snapshot.paramMap.get('category');
    this.formArray = this.formBuilder.array([]);
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
    this.message.forEach((item: any) => {
      const group = this.formBuilder.group({
        frage: [item.frage],
        antworten: {
          antwort1: [item.antworten.antwort1],
          antwort2: [item.antworten.antwort2],
          antwort3: [item.antworten.antwort3],
          antwort4: [item.antworten.antwort4],
        },
        korrekteAntwort: [item.korrekteAntwort],
        kategorie: [item.kategorie],
      });
      this.formArray.push(group);
    });
  }

  form = new FormGroup({
    frage: new FormControl('', Validators.required),
    antworten: new FormGroup({
      antwort1: new FormControl('', Validators.required),
      antwort2: new FormControl('', Validators.required),
      antwort3: new FormControl('', Validators.required),
      antwort4: new FormControl('', Validators.required),
    }),
    korrekteAntwort: new FormControl('', Validators.required),
    kategorie: new FormControl('', Validators.required),
  });

  getFormGroup(index: number): FormGroup {
    return this.formArray.controls[index] as FormGroup;
  }

  async speichern() {
    const item = this.form.value;
    item.kategorie = this.choosenCategory;
    const response = await this.http
      .post('http://localhost:5050/posts/newQuestion', item)
      .toPromise();
    window.location.reload();
  }

  async update(form: FormGroup, index: number) {
    const item = form.value;
    let _id = this.message[index]._id;
    const response = await this.http
      .put(`http://localhost:5050/posts/update/${_id}`, item)
      .toPromise();
    window.location.reload();
  }

  async loeschen(index: number) {
    let item = this.message[index];
    let _id = item._id;
    const response = await this.http
      .delete(`http://localhost:5050/posts/delete/${_id}`)
      .toPromise();
    window.location.reload();
  }
}

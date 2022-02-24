import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from '../constants';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css'],
})
export class QuizCreatorComponent {
  @ViewChild('txtConfigFile') txtConfigFile!: ElementRef;

  numberOfQuestion: number = constants.NUMBER_OF_INITIAL_QUESTIONS;
  numberOfQuestionsAllowed: number = constants.NUMBER_OF_QUESTIONS_ALLOWED;

  quizResult = false;
  copyButtonClicked = false;
  URLBase = '';

  constructor() {
    this.URLBase = environment.URLBase;
  }

  add() {
    this.numberOfQuestion = this.numberOfQuestion + 1;

  }
  submit(form: any) {
    form.control.markAllAsTouched();
    console.debug(form);
    if (form.valid)
      this.quizResult = true;
  }
  copy() {
    if (this.txtConfigFile) {
      // Select textarea text
      this.txtConfigFile.nativeElement.select();

      // Copy to the clipboard
      document.execCommand("copy");

      // Deselect selected textarea
      this.txtConfigFile.nativeElement.setSelectionRange(0, 0);

      // Show Message
      this.copyButtonClicked = true;
    }
  }
}

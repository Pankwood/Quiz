import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from '../constants';

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css'],
})
export class QuizCreatorComponent {
  numberOfQuestion: number = constants.NUMBER_OF_INITIAL_QUESTIONS;
  numberOfQuestionsAllowed: number = constants.NUMBER_OF_QUESTIONS_ALLOWED;
  quizResult = false;

  @ViewChild('txtConfigFile') txtConfigFile!: ElementRef;

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
    }
  }
}

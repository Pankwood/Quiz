import { Component, Input } from '@angular/core';
import { constants } from '../constants';

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css'],
})
export class QuizCreatorComponent {
  numberOfQuestion: number = 0;
  numberOfQuestionsAllowed: number = constants.NUMBER_OF_QUESTIONS_ALLOWED;

  add() {
    this.numberOfQuestion = this.numberOfQuestion + 1;

  }
  submit(form: any) {
    form.control.markAllAsTouched();
  }
}

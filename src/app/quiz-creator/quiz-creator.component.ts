import { Component, Input } from '@angular/core';
import { QuizQuestionsComponent } from '../quiz-questions/quiz-questions.component';

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css'],
})
export class QuizCreatorComponent {
  numberOfQuestion: number = 0;

  add() {
    this.numberOfQuestion = this.numberOfQuestion + 1;

  }
  submit(form: any) {
    form.control.markAllAsTouched();
  }
}

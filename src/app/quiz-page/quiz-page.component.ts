import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})

export class QuizPageComponent {
  static readonly GROUP_FORM: string = "Question";
  static readonly CORRECT_ANSWER: string = "numCorrect";

  quiz: any;
  countCorrectAnswers: number = 0;
  pageNumber: number = 0;
  isValid: boolean = true;

  constructor(quizService: QuizService) {
    this.quiz = quizService.getQuiz();
  }

  previous() {
    if (this.pageNumber > 0)
      this.pageNumber--;
  }

  next(form: any) {
    this.isValid = form.controls[QuizPageComponent.GROUP_FORM + this.pageNumber].valid;

    if ((this.pageNumber <= this.quiz.length) && (this.isValid))
      this.pageNumber++;
  }

  submit(f: any) {
    Object.values(f.controls).forEach((control, i) => {
      this.countCorrectAnswers += ((control as FormControl).value[i + 1] == this.quiz[i].correctAnswer) ? +1 : 0;
    });

    localStorage.setItem(QuizPageComponent.CORRECT_ANSWER, this.countCorrectAnswers.toString());
  }

}

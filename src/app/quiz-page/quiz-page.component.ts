import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})

export class QuizPageComponent {
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
    this.isValid = false;
    //There is a bug here
    Object.values(form.controls).forEach(ctl => {
      if ((ctl as FormControl).valid)
        this.isValid = true;
    });

    if ((this.pageNumber <= this.quiz.length) && (this.isValid))
      this.pageNumber++;
  }

  submit(f: any) {
    Object.values(f.controls).forEach((control, i) => {
      this.countCorrectAnswers += ((control as FormControl).value[i + 1] == this.quiz[i].correctAnswer) ? +1 : 0;
    });

    localStorage.setItem('numCorrect', this.countCorrectAnswers.toString());
  }

}

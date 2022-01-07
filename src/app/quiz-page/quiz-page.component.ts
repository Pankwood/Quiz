import { Component } from '@angular/core';
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

  constructor(quizService: QuizService) {
    this.quiz = quizService.getQuiz();
  }

  previous() {
    if (this.pageNumber > 0)
      this.pageNumber--;
  }

  next() {
    if (this.pageNumber <= this.quiz.length)
      this.pageNumber++;
  }

  submit(f: any) {
    for (let i = 0; i < this.quiz.length; i++)
      this.countCorrectAnswers += ((this.quiz[i].correctAnswer == f.form.value[i + 1])) ? +1 : 0;

    localStorage.setItem('numCorrect', this.countCorrectAnswers.toString());
  }

}

import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})


export class QuizPageComponent implements OnInit {

  quiz: string[];
  constructor(quizService: QuizService) {

    this.quiz = quizService.getQuiz();
  }

  ngOnInit(): void {
  }

}

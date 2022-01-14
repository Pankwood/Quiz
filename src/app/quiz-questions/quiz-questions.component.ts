import { Component, OnInit, Input } from '@angular/core';
import { constants } from '../constants';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  @Input() numberOfQuestion: number = 0;

  numbers: number[] = [];
  numberOfAnswerAllowed: number = constants.NUMBER_OF_ANSWERS_ALLOWED;

  constructor() {

  }

  ngOnInit(): void {
    this.numbers = Array(constants.NUMBER_OF_QUESTIONS_ALLOWED).fill(0).map((_x, i) => i);
  }

}

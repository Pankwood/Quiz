import { Component, OnInit, Input } from '@angular/core';
import { constants } from '../constants';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  @Input() numberOfQuestion: number = constants.NUMBER_OF_INITIAL_QUESTIONS;
  numbers: number[] = [];
  numberOfAnswerAllowed: number = constants.NUMBER_OF_ANSWERS_ALLOWED;

  ngOnInit(): void {
    this.numbers = Array(constants.NUMBER_OF_QUESTIONS_ALLOWED).fill(0).map((_x, i) => i);
  }

}

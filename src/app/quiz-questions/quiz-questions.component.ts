import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  @Input() numberOfQuestion: number = 0;

  numbers: number[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.numbers = Array(5).fill(0).map((_x, i) => i);
  }

}

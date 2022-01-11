import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class QuizAnswersComponent implements OnInit {

  @Input('numberOfAnswer') totalAnswers: number = 0;
  defaultAnswers: number = 2;

  numbers: number[] = [];
  option: boolean[] = [];
  isValid: boolean[] = [];

  count = 1;

  ngOnInit(): void {
    this.numbers = Array(this.totalAnswers).fill(0).map((_x, i) => i);
    this.option = Array(this.totalAnswers).fill(null).map((_x, i) => i <= this.defaultAnswers - 1);
    this.isValid = Array(this.totalAnswers).fill(1);
  }

  add() {
    if (this.count < this.totalAnswers - 1) {
      this.count = this.count + 1;
      this.option[this.option.findIndex(a => a == false)] = true;
    }
  }

  exclude(index: number) {
    this.option[index] = false;
    this.count = this.count - 1;

    if (this.isValid[index] == false)
      this.isValid[index] = true;
  }

  check(index: number) {
    this.isValid.fill(true);
    this.isValid[index] = false;
  }

}

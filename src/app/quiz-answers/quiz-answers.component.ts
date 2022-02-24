import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgModelGroup }]
})

export class QuizAnswersComponent implements OnInit {

  @Input() numberOfAnswer: number = 0;
  @Input() questionIndex: number = 0;

  defaultAnswers: number = 2;
  numbers: number[] = [];
  option: boolean[] = [];
  isChecked: boolean[] = [];

  count = 1;

  ngOnInit(): void {
    this.numbers = Array(this.numberOfAnswer).fill(0).map((_x, i) => i);
    this.option = Array(this.numberOfAnswer).fill(null).map((_x, i) => i <= this.defaultAnswers - 1);
    this.isChecked = Array(this.numberOfAnswer).fill(1);
  }

  add() {
    if (this.count < this.numberOfAnswer - 1) {
      this.count = this.count + 1;
      this.option[this.option.findIndex(a => a == false)] = true;
    }
  }

  exclude(index: number) {
    this.option[index] = false;
    this.count = this.count - 1;

    if (this.isChecked[index] == false)
      this.isChecked[index] = true;
  }

  check(index: number) {
    this.isChecked.fill(true);
    this.isChecked[index] = false;
  }

}

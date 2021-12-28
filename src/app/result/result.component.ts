import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  quizResult: number;
  isBlur: boolean[];

  constructor() {
    this.quizResult = 0;
    this.isBlur = []
  }

  ngOnInit(): void {
    this.quizResult = parseInt(localStorage.getItem("numCorrect") ?? "0", this.quizResult);

    const numberOfImages = document.querySelectorAll('app-result > .image').length;
    for (let i = 0; i < numberOfImages; i++) {
      this.isBlur[i] = this.quizResult < i + 1;

    }
  }

}

import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})


export class QuizPageComponent implements OnInit {

  questionsList: any;
  clickStatus: Array<boolean>;
  funnyMessage: string[];
  funnyIndexMessage: string;

  constructor(quizService: QuizService) {

    this.questionsList = quizService.getQuiz();
    this.clickStatus = new Array(this.questionsList[0].answers.lenght);
    this.funnyMessage = ["Are you sure?", "Humm...Maybe...", "Seriously? HAHA"];
    this.funnyIndexMessage = "";
  }

  ngOnInit(): void {
  }

  onClickMe($event: any, value: string, answerIndex: number, questionsListIndex: number) {
    if ($event.target.value === this.questionsList[questionsListIndex].correctAnswer) {
      console.log(this.questionsList[questionsListIndex].correctAnswer, "Correct answer!");
    }

    this.funnyIndexMessage = this.funnyMessage[Math.floor(Math.random() * this.funnyMessage.length)];

    /*for (let j = 0; j <= this.questionsList[questionsListIndex].answers.length - 1; j++) {
      this.clickStatus[j] = (j === answerIndex);
    }*/
  }

}

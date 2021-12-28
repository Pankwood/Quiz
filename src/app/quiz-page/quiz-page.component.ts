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
  countCorrectAnswers: number = 0;
  funnyMessage: string[];
  funnyIndexMessage: string = "";
  questionsAnswered: number[] = [];
  quizContainer: any;
  resultsContainer: any;



  constructor(quizService: QuizService) {

    this.questionsList = quizService.getQuiz();
    this.clickStatus = new Array(this.questionsList[0].answers.lenght);
    this.funnyMessage = ["Are you sure?", "Humm...Maybe...", "Seriously? HAHA"];
  }

  ngOnInit(): void {
  }

  onClickMe($event: any, value: string, answerIndex: number, questionsListIndex: number) {
    if (($event.target.value === this.questionsList[questionsListIndex].correctAnswer) && (!this.questionsAnswered.find(answer => answer === questionsListIndex))) {
      this.countCorrectAnswers++;
      this.questionsAnswered.push(questionsListIndex);
      console.log(this.questionsList[questionsListIndex].correctAnswer, "Correct answer!");
    }
    else if ((this.countCorrectAnswers > 0) && ($event.target.value !== this.questionsList[questionsListIndex].correctAnswer)) {
      this.countCorrectAnswers--;
    }

    this.funnyIndexMessage = this.funnyMessage[Math.floor(Math.random() * this.funnyMessage.length)];

    /*for (let j = 0; j <= this.questionsList[questionsListIndex].answers.length - 1; j++) {
      this.clickStatus[j] = (j === answerIndex);
    }*/
  }

  submitClick() {
    console.log("Correct answers", this.countCorrectAnswers);
    this.showResults();
  }

  showResults() {

    this.quizContainer = document.getElementById('quiz');
    this.resultsContainer = document.getElementById('results');

    // gather answer containers from our quiz
    const answerContainers = this.quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    this.questionsList.forEach((currentQuestion: { correctAnswer: any; }, questionNumber: string | number) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      }

    });

    // show number of correct answers out of total
    this.resultsContainer.innerHTML = numCorrect + ` out of ` + this.questionsList.length;
    //window.location.href = "./result.html";
    localStorage.setItem('numCorrect', numCorrect.toString());
  }

}

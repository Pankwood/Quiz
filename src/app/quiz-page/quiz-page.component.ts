import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuizService } from '../quiz.service';
import { constants } from '../constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})

export class QuizPageComponent implements OnInit {

  firstParam: string = "";
  quiz: any;
  countCorrectAnswers: number = 0;
  pageNumber: number = 0;
  isValid: boolean = true;

  constructor(quizService: QuizService, private route: ActivatedRoute
  ) {

    let str = route.snapshot.queryParamMap.get('build') ?? "";

    this.quiz = quizService.getQuiz(JSON.parse(str));
  }

  ngOnInit(): void {
  }

  previous() {
    if (this.pageNumber > 0)
      this.pageNumber--;
  }

  next(form: any) {
    this.isValid = form.controls[constants.GROUP_FORM + this.pageNumber].valid;

    if ((this.pageNumber <= this.quiz.length) && (this.isValid))
      this.pageNumber++;
  }

  submit(f: any) {
    Object.values(f.controls).forEach((control, i) => {
      this.countCorrectAnswers += ((control as FormControl).value[i + 1] == this.quiz[i].correctAnswer) ? +1 : 0;
    });

    localStorage.setItem(constants.CORRECT_ANSWER, this.countCorrectAnswers.toString());
  }

}

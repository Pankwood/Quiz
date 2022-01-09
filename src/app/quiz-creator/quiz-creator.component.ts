import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.css']
})
export class QuizCreatorComponent {

  count = 1;
  isValid: boolean = true;
  isValid2: boolean = true;
  isValid3: boolean = true;
  isValid4: boolean = true;
  option: boolean = false;
  option2: boolean = false;
  option3: boolean = false;
  option4: boolean = false;

  add() {
    if (this.count < 4) {
      this.count++;
      this.option2 = (this.count >= 2);
      this.option3 = (this.count >= 3);
      this.option4 = (this.count >= 4);
    }
  }
}

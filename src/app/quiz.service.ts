import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuiz() {
    return ["Quiz1", "Quiz2", "Quiz3"]
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuiz(value: any) {
    value = value[0];
    return [
      {
        id: 1,
        quizTitle: value.quizTitle,
        question: value.quizQuestion0,
        answers: [
          { answer: value.question0quizAnswer0 },
          { answer: value.question0quizAnswer1 },
          { answer: value.question0quizAnswer2 },
          { answer: value.question0quizAnswer3 }
        ],
        correctAnswer: "Viagem"
      },
      {
        id: 2,
        quizTitle: value.quizTitle,
        question: value.quizQuestion1,
        answers: [
          { answer: value.question1quizAnswer0 },
          { answer: value.question1quizAnswer1 },
          { answer: value.question1quizAnswer2 },
          { answer: value.question1quizAnswer3 }
        ],
        correctAnswer: "MIB"
      },
      {
        id: 3,
        quizTitle: value.quizTitle,
        question: value.quizQuestion2,
        answers: [
          { answer: value.question2quizAnswer0 },
          { answer: value.question2quizAnswer1 },
          { answer: value.question2quizAnswer2 },
          { answer: value.question2quizAnswer3 }
        ],
        correctAnswer: "Amarela"
      },
      {
        id: 4,
        quizTitle: value.quizTitle,
        question: value.quizQuestion3,
        answers: [
          { answer: value.question3quizAnswer0 },
          { answer: value.question3quizAnswer1 },
          { answer: value.question3quizAnswer2 },
          { answer: value.question3quizAnswer3 }
        ],
        correctAnswer: "Amarela"
      },
      {
        id: 4,
        quizTitle: value.quizTitle,
        question: value.quizQuestion4,
        answers: [
          { answer: value.question4quizAnswer0 },
          { answer: value.question4quizAnswer1 },
          { answer: value.question4quizAnswer2 },
          { answer: value.question4quizAnswer3 }
        ],
        correctAnswer: "Amarela"
      }
    ]
  }
}

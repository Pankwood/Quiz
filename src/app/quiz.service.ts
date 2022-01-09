import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuiz() {
    return [
      {
        id: 1,
        question: "Se a Juliana ganhasse na loteria, qual seria a primeira compra dela?",
        answers: [
          { answer: "Roupas" },
          { answer: "Viagem" },
          { answer: "Mansão" },
          { answer: "Iate" }
        ],
        correctAnswer: "Viagem"
      },
      {
        id: 2,
        question: "Qual seu filme predileto?",
        answers: [
          { answer: "Silent Hill" },
          { answer: "Matrix" },
          { answer: "The Shining" },
          { answer: "MIB" }
        ],
        correctAnswer: "MIB"
      },
      {
        id: 3,
        question: "Qual sua cor predileta",
        answers: [
          { answer: "Amarela" },
          { answer: "Azul" },
          { answer: "Verde" },
          { answer: "Vermelha" }
        ],
        correctAnswer: "Amarela"
      }
    ]
  }
}

import { Injectable } from '@angular/core';
import { IQuiz, IQuestion, IAnswer } from './iquiz.quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuiz(value: any) {
    value = value[0];


    let answers: Array<IAnswer> = [];
    let questions: Array<IQuestion> = [];
    let questionNumber: Number = Object.keys(value.Questions).filter(function (e) {
      if (parseInt(e) >= 0) {
        return e;
      }
      else
        return null;
    }).length;

    for (let i = 0; i < questionNumber; i++) {

      answers = [];
      if (i === 0) {
        for (let j = 0; j < Object.keys(value.Questions.question0).length; j++) {
          let answer: IAnswer = { answer: value.Questions?.question0[j].answer, quizCorrectAnswer: false }
          answers.push(answer);
        }
      }
      else if (i === 1) {
        for (let j = 0; j < Object.keys(value.Questions.question1).length; j++) {
          let answer: IAnswer = { answer: value.Questions?.question1[j].answer, quizCorrectAnswer: false }
          answers.push(answer);
        }
      }
      else if (i === 2) {
        for (let j = 0; j < Object.keys(value.Questions?.question2).length; j++) {
          let answer: IAnswer = { answer: value.Questions?.question2[j].answer, quizCorrectAnswer: false }
          answers.push(answer);
        }
      }
      else if (i === 3) {
        for (let j = 0; j < Object.keys(value.Questions?.question3).length; j++) {
          let answer: IAnswer = { answer: value.Questions?.question3[j].answer, quizCorrectAnswer: false }
          answers.push(answer);
        }
      }
      else if (i === 4) {
        for (let j = 0; j < Object.keys(value.Questions?.question4).length; j++) {
          let answer: IAnswer = { answer: value.Questions?.question4[j].answer, quizCorrectAnswer: false }
          answers.push(answer);
        }
      }

      let question: IQuestion = { id: i + 1, question: value.Questions[i]?.quizQuestion, answers: answers };
      questions.push(question);
    }

    let quiz: IQuiz = {
      title: value.quizTitle,
      questions: questions
    }



    return quiz;
  }
}

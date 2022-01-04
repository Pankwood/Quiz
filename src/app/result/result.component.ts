import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  quizResult: number = 0;
  isBlur: boolean[] = [];
  questions = [
    {
      image: './assets/images/ticket1.png',
      alt: 'Muito abracos',
      id: 'recompensa1',
    },
    {
      image: './assets/images/ticket2.png',
      alt: 'Beijo Calhiente',
      id: 'recompensa2',
    }, {
      image: './assets/images/ticket3.png',
      alt: 'Massagem',
      id: 'recompensa3',
    }, {
      image: './assets/images/ticket4.png',
      alt: 'Cafe na cama',
      id: 'recompensa4',
    }, {
      image: './assets/images/ticket5.png',
      alt: 'Jantar Romantico',
      id: 'recompensa5',
    },
  ];

  ngOnInit(): void {
    this.quizResult = parseInt(localStorage.getItem("numCorrect") ?? "0", 10)

    for (let i = 0; i < this.questions.length; i++) {
      this.isBlur[i] = this.quizResult < i + 1;
    }
  }
}
export interface IQuiz {
    title: string;
    questions: Array<IQuestion>;
}

export interface IQuestion {
    id: number;
    question: string;
    correctAnswer: string;
    answers: Array<IAnswer>;
}


export interface IAnswer {
    answer: string;
    quizCorrectAnswer: boolean;
}

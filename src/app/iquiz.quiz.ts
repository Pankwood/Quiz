export interface IQuiz {
    quizTitle: string;
    questions: Array<IQuestion>;
}

export interface IQuestion {
    id: number;
    quizQuestion: string;
    answers: Array<IAnswer>;
}


export interface IAnswer {
    quizAnswer: string;
    quizCorrectAnswer: boolean;
}

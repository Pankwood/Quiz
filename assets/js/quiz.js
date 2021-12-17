(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `
                <input type="radio" name="question${questionNumber}" id="question${questionNumber}${letter}" value="${letter}"><label for="question${questionNumber}${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
            }

        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        window.location.href = "./result.html";
        localStorage.setItem('numCorrect', numCorrect);
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    let myQuestions = [
        {
            question: "Se a Juliana ganhasse na loteria, qual seria a primeira compra dela?",
            answers: {
                a: "Roupas",
                b: "Viagem",
                c: "Mansão",
                d: "Iate"
            },
            correctAnswer: "b"
        },
        {
            question: "O que a Juliana acha de dividir comida?",
            answers: {
                a: "Não se importa",
                b: "Nem pensar!",
                c: "Depende da comida",
                d: "Depende da fome"
            },
            correctAnswer: "d"
        },
        {
            question: "Se a Juliana encontrasse uma lâmpada mágica, qual a primeira coisa que ela pediria?",
            answers: {
                a: "Dinheiro sem fim",
                b: "Saúde",
                c: "Super Poderes",
                d: "Sabedoria"
            },
            correctAnswer: "a"
        },
        {
            question: "O que mais irrita ela?",
            answers: {
                a: "Barulho alto",
                b: "Ficar com fome",
                c: "Indecisão na hora de escolher algo para comer",
                d: "Mexer no celular enquanto conversa"
            },
            correctAnswer: "c"
        },
        {
            question: "Qual seria o título da lápide dela?",
            answers: {
                a: "Uma Jornada de Milagres",
                b: "Ter nascido me estragou a saúde",
                c: "Nunca matou quem não precisasse ser assassinado",
                d: "Cai fora. Estou dormido"
            },
            correctAnswer: "d"
        }
    ];

    if (localStorage.getItem("user") === '?user=Naia') {
        myQuestions = [
            {
                question: "Se o Danilo ganhasse na loteria, qual seria a primeira compra dele?",
                answers: {
                    a: "Barco",
                    b: "Viagem",
                    c: "Tim Hortons",
                    d: "Ilha"
                },
                correctAnswer: "b"
            },
            {
                question: "O que o Danilo acha de dividir comida?",
                answers: {
                    a: "Não se importa",
                    b: "Nem pensar!",
                    c: "Depende da comida",
                    d: "Depende da fome"
                },
                correctAnswer: "c"
            },
            {
                question: "Se o Danilo encontrasse uma lâmpada mágica, qual a primeira coisa que ele pediria?",
                answers: {
                    a: "Dinheiro sem fim",
                    b: "Saúde",
                    c: "Super Poderes",
                    d: "Sabedoria"
                },
                correctAnswer: "d"
            },
            {
                question: "O que mais irrita ele?",
                answers: {
                    a: "Ficar sem café",
                    b: "Desmarcar compromisso em cima da hora",
                    c: "Indecisão na hora de escolher algo para comer",
                    d: "Política Brasileira"
                },
                correctAnswer: "d"
            },
            {
                question: "Qual seria o título da lápide dele?",
                answers: {
                    a: "Tchau, foi legal!",
                    b: "Melhor morrer do que perder a vida",
                    c: "Partiu ser feliz!",
                    d: "Cai fora. Estou dormido"
                },
                correctAnswer: "a"
            }
        ];
    }

    if (localStorage.getItem("user") === '?user=Bela') {
        myQuestions = [
            {
                question: "Se o Danilo ganhasse na loteria, qual seria a primeira compra dele?",
                answers: {
                    a: "Barco",
                    b: "Viagem",
                    c: "Tim Hortons",
                    d: "Ilha"
                },
                correctAnswer: "b"
            },
            {
                question: "O que o Danilo acha de dividir comida?",
                answers: {
                    a: "Não se importa",
                    b: "Nem pensar!",
                    c: "Depende da comida",
                    d: "Depende da fome"
                },
                correctAnswer: "c"
            },
            {
                question: "Se o Danilo encontrasse uma lâmpada mágica, qual a primeira coisa que ele pediria?",
                answers: {
                    a: "Dinheiro sem fim",
                    b: "Saúde",
                    c: "Super Poderes",
                    d: "Sabedoria"
                },
                correctAnswer: "d"
            },
            {
                question: "O que mais irrita ele?",
                answers: {
                    a: "Ficar sem café",
                    b: "Desmarcar compromisso em cima da hora",
                    c: "Indecisão na hora de escolher algo para comer",
                    d: "Política Brasileira"
                },
                correctAnswer: "d"
            },
            {
                question: "Qual seria o título da lápide dele?",
                answers: {
                    a: "Tchau, foi legal!",
                    b: "Melhor morrer do que perder a vida",
                    c: "Partiu ser feliz!",
                    d: "Cai fora. Estou dormido"
                },
                correctAnswer: "a"
            }
        ];
    }

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
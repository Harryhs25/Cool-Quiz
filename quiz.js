const question = document.querySelector('#question');
const choices = array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressFull = document.querySelector('#progressFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: "What is the first thing you should do when preparing a meal?",
    choice1: 'Play with your pet(s)'
    choice2: 'Wash your hands'
    choice3: 'Prepare your ingrediants'
    choice4: 'Go on a walk'
    answer: 2,
  }
      question2: "What does marinating do to meat?",
    choice1: 'Adds different flavours to the meat'
    choice2: 'Makes the meat cook faster'
    choice3: 'Makes the meat look nice'
    choice4: 'Makes the meat look presentable'
    answer: 1,
  }
      question3: "What makes a cake turn brown?",
    choice1: 'Someone defecated on the cake :o'
    choice2: 'The eggs combining with other baked ingrediants'
    choice3: 'Baking soda chemical reaction'
    choice4: 'Brown Sugar'
    answer: 3,
  }
      question4: "Bobotie is the national dish of which country?",
    choice1: 'South Africa'
    choice2: 'Ethiopia'
    choice3: 'Kenya'
    choice4: 'Chad'
    answer: 1,
  }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
  questionCounter = 0
  score
}
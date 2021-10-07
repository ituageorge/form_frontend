import React from 'react';

//creating an array and passing the number, questions, options, and answers

 export const questions = [
  {
    questionText: 'Who is the President of France?',
    answerOptions: [
      {answerText: 'Mohammadu Buhari', isCorrect: false},
      {answerText: 'Donald Trump', isCorrect: false},
      {answerText: 'Emmanuel Macron', isCorrect: true},
      {answerText: 'Joe Biden', isCorrect: false},
    ],
  },
  {
    questionText: 'What is the capital of turkey?',
    answerOptions: [
      {answerText: 'New Delhi', isCorrect: false},
      {answerText: 'Ankara', isCorrect: true},
      {answerText: 'Abuja', isCorrect: false},
      {answerText: 'Aba', isCorrect: false},
    ],
  },
  {
    questionText: 'What’s the chemical symbol for silver?',
    answerOptions: [
      {answerText: 'Ag', isCorrect: true},
      {answerText: 'Na', isCorrect: false},
      {answerText: 'Hg', isCorrect: false},
      {answerText: 'Mg', isCorrect: false},
    ],
  },
  {
    questionText: 'What is the capital city of Switzerland?',
    answerOptions: [
      {answerText: 'Kigali', isCorrect: false},
      {answerText: 'NewYork City', isCorrect: false},
      {answerText: 'Benin City', isCorrect: false},
      {answerText: 'Bern', isCorrect: true},
    ],
  },
  {
    questionText: 'What is the largest Continent in the planet?',
    answerOptions: [
      {answerText: 'Africa', isCorrect: false},
      {answerText: 'Asia', isCorrect: true},
      {answerText: 'North America', isCorrect: false},
      {answerText: 'South America', isCorrect: false},
    ],
  },
];

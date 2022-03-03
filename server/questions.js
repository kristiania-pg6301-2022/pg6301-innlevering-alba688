export function randomQuestion() {
  return Questions[Math.trunc(Math.random() * Questions.length)];
}

export function isCorrectAnswer(question, answer) {
  return question.correct_answers[answer + "_correct"] === "true";
}

export const Questions = [
  {
    id: 101,
    question: "Havana is the capital of what country?",
    answers: {
      answer_a: "Mexico",
      answer_b: "Cuba",
      answer_c: "Barbados",
      answer_d: "Venezuela",
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
  },
  {
    id: 102,
    question: "What is the rarest M&M color?",
    answers: {
      answer_a: "Brown",
      answer_b: "Blue",
      answer_c: "Red",
      answer_d: "Yellow",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
  },
  {
    id: 103,
    question: "What country won the first-ever World Cup in 1930?",
    answers: {
      answer_a: "Mexico",
      answer_b: "France",
      answer_c: "South Africa",
      answer_d: "Uruguay",
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
  },
  {
    id: 104,
    question: "How many colors are in the rainbow?",
    answers: {
      answer_a: "5",
      answer_b: "10",
      answer_c: "8",
      answer_d: "7",
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
  },
  {
    id: 105,
    question: "What is Earth's largest continent",
    answers: {
      answer_a: "Asia",
      answer_b: "Africa",
      answer_c: "Europe",
      answer_d: "Australia",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
  },
];

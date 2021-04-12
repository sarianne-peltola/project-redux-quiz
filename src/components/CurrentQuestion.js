import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const answer = useSelector((state) => state.quiz.questions[state.quiz.correctAnswerIndex]);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const isCorrect = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

  console.log(isCorrect)

  const dispatch = useDispatch();
  if (!question) {
    return 
  }

  const determineCorrectness = () => {
    if (isCorrect === undefined) {
      return ""
    } else {
      if (isCorrect.isCorrect) {
        return "correct"
      } else {
        return "not correct"
      }
    }
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
        <div>
          <button onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 0 }))}>
            Singapore
          </button>
          <button onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 1 }))}>
            Portugal
          </button>
          <button onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 2 }))}>
            Spain
          </button>
          <button onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 3 }))}>
            Japan
          </button>
        </div>
      <h2>{determineCorrectness()}</h2>
      <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
        Go to next Question
      </button>
    </div>
  )
}
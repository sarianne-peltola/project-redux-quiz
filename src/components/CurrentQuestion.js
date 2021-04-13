import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const answer = useSelector((state) => state.quiz.questions[state.quiz.correctAnswerIndex]);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const isCorrect = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);
  const questionAmount = useSelector((state) => state.quiz.questions); 

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
      <h2>{question.id}/{questionAmount.length}</h2>
        <div>
          {question.options.map((item, index ) => {
              return <button onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))}>{item}</button>
          })}
        </div>
      <h2>{determineCorrectness()}</h2>
      {isCorrect === undefined ? null : 
        <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Go to next Question
        </button>
      }
     
    </div>
  )
}
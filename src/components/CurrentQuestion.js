import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz';

import Summary from './Summary'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  const answer = useSelector((state) => state.quiz.questions[state.quiz.correctAnswerIndex]);
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const isCorrect = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);
  const questionAmount = useSelector((state) => state.quiz.questions); 


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
  if (quizOver === true) {
    return <Summary /> 
  } else {
    return (
      <div>
        <h1>Question: {question.questionText}</h1>
        <h2>{question.id}/{questionAmount.length}</h2>
          <div>
            {question.options.map((item, index ) => {
                return <button key={index} onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))}>{item}</button>
            })}
          </div>
        <h2>{determineCorrectness()}</h2>
        {isCorrect === undefined ? null : 
          <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
            {question.id < questionAmount.length ? "Next question" : "Show result"}
          </button>
        }
       {quizOver ? Summary(): null }
      </div>
    )
  }
  }
  
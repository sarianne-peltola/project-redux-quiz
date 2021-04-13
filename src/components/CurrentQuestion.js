import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

import Summary from "./Summary";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector(
    (state) => state.quiz.questions[state.quiz.correctAnswerIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);
  const isCorrect = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  );
  const questionAmount = useSelector((state) => state.quiz.questions);

  const dispatch = useDispatch();
  if (!question) {
    return;
  }

  const determineCorrectness = () => {
    if (isCorrect === undefined) {
      return "";
    } else {
      if (isCorrect.isCorrect) {
        return "You are correct 👍";
      } else {
        return "You are not correct 👎";
      }
    }
  };
  if (quizOver === true) {
    return <Summary />;
  } else {
    return (
      <div className="quiz-container">
        <div className="counter">
          {question.id === 1
            ? questionAmount.map((item, index) => {
                return (
                  <div key={index} className="counter-number">
                    {item.id}
                  </div>
                );
              })
            : question.id === 2
            ? questionAmount.map((item, index) => {
                return (
                  <div key={index} className="counter-number2">
                    {item.id}
                  </div>
                );
              })
            : question.id === 3
            ? questionAmount.map((item, index) => {
                return (
                  <div key={index} className="counter-number3">
                    {item.id}
                  </div>
                );
              })
            : question.id === 4
            ? questionAmount.map((item, index) => {
                return (
                  <div key={index} className="counter-number4">
                    {item.id}
                  </div>
                );
              })
            : question.id === 5
            ? questionAmount.map((item, index) => {
                return (
                  <div key={index} className="counter-number5">
                    {item.id}
                  </div>
                );
              })
            : null}
        </div>
        <h1>{question.questionText}</h1>
        <div className="answer-container">
          {question.options.map((item, index) => {
            return (
              <button
                key={index}
                className="square_btn"
                onClick={() =>
                  dispatch(
                    quiz.actions.submitAnswer({
                      questionId: question.id,
                      answerIndex: index,
                    })
                  )
                }
              >
                {item}
              </button>
            );
          })}
        </div>
        <p>
          You have answered {question.id}/{questionAmount.length} questions
        </p>
        <h4>{determineCorrectness()}</h4>
        {isCorrect === undefined ? null : (
          <button
            className="square_btn"
            onClick={() => dispatch(quiz.actions.goToNextQuestion())}
          >
            {question.id < questionAmount.length
              ? "Next question"
              : "Show result"}
          </button>
        )}
      </div>
    );
  }
};

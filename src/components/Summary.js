import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

const Summary = () => {
  const dispatch = useDispatch();
  const totalQuestions = useSelector((state) => state.quiz.answers);
  const total = totalQuestions.filter((x) => x.isCorrect);
  const questionAmount = useSelector((state) => state.quiz.questions);

  return (
    <div className="quiz-container">
      <h1>
        You got {total.length} / {questionAmount.length} answers correct! 👏
      </h1>
      <button
        className="square_btn"
        onClick={() => dispatch(quiz.actions.restart())}
      >
        Restart
      </button>
    </div>
  );
};
export default Summary;

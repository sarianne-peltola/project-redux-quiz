import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";

 const Summary = () => {
    const dispatch = useDispatch();
    const totalQuestions = useSelector((state) => state.quiz.answers);
    const total = totalQuestions.filter((x) => x.isCorrect);
    const questionAmount = useSelector((state) => state.quiz.questions); 
    
    
     return (
         <>
         <h1>You got {total.length} / {questionAmount.length}</h1>
         <button
            className="restart-button"
            onClick={() => dispatch(quiz.actions.restart())}
        >
            Restart
        </button>
         </>
         
     )
 }
 export default Summary 
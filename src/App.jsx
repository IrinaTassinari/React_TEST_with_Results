import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";
import { sendQuestions } from "./features/questionnaire/questionnaireSlice";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);

  return (
    <div className="app">
      <h1>Test</h1>
      <div className="flexBox">
        <div className="left">
          <div className="questionsList">
               {questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}
          </div>
         

          <button
            className="btnResult"
            onClick={() => dispatch(sendQuestions())}
          >
            Finish the test and get the result
          </button>
        </div>

        <div className="right">
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;

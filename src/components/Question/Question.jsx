import { useDispatch } from "react-redux";
import { answerQuestions } from "../../features/questionnaire/questionnaireSlice";
import style from './Question.module.css'

function Question({question}) {
  const dispatch = useDispatch();

  return (
    <div className={style.questionCard}>
      <p className={style.questionText}>{question.text}</p>

      <div className={style.options}>
        {question.options.map(option => (
        <label
  key={option}
  className={`${style.option} ${
    question.answer === option ? style.isSelected : ""
  }`}
>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={question.answer === option} //Этот radio выбран, если ответ пользователя равен этому варианту
            onChange={() =>
              dispatch(
                answerQuestions({
                  questionId: question.id,
                  answer: option
                })
              )
            }
          />
          {option}
        </label>
      ))}
      </div>
      
    </div>
  );
}

export default Question;
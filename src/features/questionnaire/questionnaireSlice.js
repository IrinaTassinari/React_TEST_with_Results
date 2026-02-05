//Slice = кусок глобального состояния + логика, которая умеет этот кусок менять

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Does the Array.map() method return a new array?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
      answer: null
    },
    {
      id: 2,
      text: 'Does Array.forEach() return a new array?',
      options: ['Yes', 'No'],
      correctAnswer: 'No',
      answer: null
    },
    {
      id: 3,
      text: 'Can Array.filter() change the original array?',
      options: ['Yes', 'No'],
      correctAnswer: 'No',
      answer: null
    },
    {
      id: 4,
      text: 'Does Array.find() return the first matching element?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
      answer: null
    },
    {
      id: 5,
      text: 'Does Array.includes() return a boolean value?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
      answer: null
    },
    {
      id: 6,
      text: 'Can Object.keys() be used to get all keys of an object?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
      answer: null
    },
    {
      id: 7,
      text: 'Does Object.values() return an object?',
      options: ['Yes', 'No'],
      correctAnswer: 'No',
      answer: null
    },
    {
      id: 8,
      text: 'Can Array.reduce() return any type of value?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
      answer: null
    },
    {
      id: 9,
      text: 'Does Array.push() return the new length of the array?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
      answer: null
    },
    {
      id: 10,
      text: 'Can Object.assign() be used to merge objects?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
      answer: null
    }
  ],
  isSubmitted: false, //Чтобы: 1)понимать, отправлена анкета или нет   2)показывать / скрывать результат
  result: null        //Чтобы: хранить результат анкеты
};




/**
 * Ты говоришь Redux Toolkit:
«Создай срез состояния с именем questions,
используй вот такое начальное состояние
и вот такие правила его изменения». 
reducers — правила изменения state
 */
const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        answerQuestions(state, action) {
            const {questionId, answer} = action.payload //достаёт свойства из объекта и кладёт их в переменные.
            //same same:
            //const questionId = action.payload.questionId;
            //const answer = action.payload.answer;
            const question = state.questions.find(q => q.id === questionId)
            if(question){
                question.answer = answer
            }
        },

        /**
         * dispatch(
            answerQuestion({
                questionId: q.id,
                answer: option
            })
            );
         */

        sendQuestions: (state) => {
            state.isSubmitted = true

            const correctCount = state.questions.filter(
                q => q.answer === q.correctAnswer
            ).length
            state.result = `Your score is ${correctCount}. You answered ${correctCount} question(s) correctly.`
        }
    }
})

export const {answerQuestions, sendQuestions} = questionsSlice.actions
export default questionsSlice.reducer

/**
 * UI (radio click)
 ↓ dispatch(answerQuestions)
Action
 ↓ reducer
State обновился
 ↓
UI перерисовался

Нажали "Отправить"
 ↓ dispatch(sendQuestions)
Reducer
 ↓
result + isSubmitted
 ↓
Result показался
 */
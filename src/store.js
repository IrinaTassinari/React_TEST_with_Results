import { configureStore } from "@reduxjs/toolkit"; 
import questionsReducer from './features/questionnaire/questionnaireSlice' //это берется из questionnaireSlice.js
//  questionsReducer  = export default questionsSlice.reducer
//Ты говоришь: «Импортируй то, что было экспортировано по умолчанию, и **назови это questionsReducer в этом файле»».

export const store = configureStore({
    reducer:{
        questions: questionsReducer
    }
})

//Ты сказала Redux: “Вот reducer анкеты,храни его состояние в state.questions”
// Вся цепочка целиком:
// questionnaireSlice.js
//   ↓ export default reducer
// store.js
//   ↓ reducer: { questions: questionsReducer }
// Provider
//   ↓ store
// App / Components
//   ↓ useSelector / useDispatch
// Redux Store

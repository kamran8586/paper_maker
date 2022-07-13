import { configureStore } from '@reduxjs/toolkit'
import mcqSlice from './reducers/mcqs'
import questionSlice from './reducers/questionsAndHeading'
import headingSlice from './reducers/heading'

export default configureStore({
  reducer: {
    mcq: mcqSlice,
    question: questionSlice,
    heading: headingSlice
  },
})

import { createSlice } from '@reduxjs/toolkit';
import { ADD_QUESTION } from '../reduxConstants';
export const questionSlice = createSlice({
    name: ADD_QUESTION,
    initialState: {
        question: [],
    },
    reducers: {
        addquestion: (state, action) => {
            // state.value += action.payload
            return { mcqs: [...state.quetsion, action.payload] }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addquestion } = questionSlice.actions

export default questionSlice.reducer;
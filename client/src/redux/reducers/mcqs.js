import { createSlice } from '@reduxjs/toolkit'
import { ADD_MCQ } from '../reduxConstants'
export const mcqSlice = createSlice({
    name: ADD_MCQ,
    initialState: {
        mcqs: [],
    },
    reducers: {
        addmcqs: (state, action) => {
            // state.value += action.payload
            return { mcqs: [...state.mcqs, action.payload] }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addmcqs } = mcqSlice.actions

export default mcqSlice.reducer;
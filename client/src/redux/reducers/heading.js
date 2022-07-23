import { createSlice } from '@reduxjs/toolkit';
import { ADD_HEADING } from '../reduxConstants';
export const headingSlice = createSlice({
    name: ADD_HEADING,
    initialState: {
        heading: [],
    },
    reducers: {
        addheading: (state, action) => {
            // state.value += action.payload
            return { heading: [...state.heading, action.payload] }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addheading } = headingSlice.actions

export default headingSlice.reducer;
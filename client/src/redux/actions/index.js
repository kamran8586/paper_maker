import { ADD_QUESTION , ADD_MCQ,ADD_HEADING} from "../reduxConstants"
export const ADD_QUESTIONS = (item) => {
    return {
        type: ADD_QUESTION,
        payload: item,
    }
}
export const ADD_MCQS= (item) => {
    return {
        type: ADD_MCQ,
        payload: item,
    }
}
export const ADD_HEADINGS = (item) => {
    return {
        type: ADD_HEADING,
        payload: item
    }
}
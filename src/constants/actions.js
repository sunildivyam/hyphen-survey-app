import { ActionTypes } from './actionTypes';

export const surveyListLoaded = surveys => {    
    return dispatch => {        
        dispatch({
            type: ActionTypes.SURVEYLIST_LOADED,
            surveys: surveys
        });
    }    
}

export const surveySelected = survey => {    
    return dispatch => {
        dispatch({
            type: ActionTypes.SURVEY_SELECTED,
            selectedSurvey: survey
        });
    }
}

export const toggleQuestionForm = (isOpen, question) => {
    return dispatch => dispatch({
        type: isOpen ? ActionTypes.OPEN_QUESTION_FORM : ActionTypes.CLOSE_QUESTION_FORM,
        isOpen: isOpen,
        question: question
    })
}

export const saveQuestion = (question) => {
    return dispatch => dispatch ({
        type: ActionTypes.SAVE_QUESTION,
        question: question
    })
}

export const toggleLoading = isLoading => {
    return {
        type: isLoading ? ActionTypes.LOADING_STARTED : ActionTypes.LOADING_STOPPED,
        isLoading: isLoading
    }
}

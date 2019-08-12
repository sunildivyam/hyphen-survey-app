import {ActionTypes} from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    switch (action.type) {
      case ActionTypes.SURVEYLIST_LOADED:
        return {
          ...state,
          surveys: action.surveys          
        };
      case ActionTypes.SURVEY_SELECTED:        
        return {
          ...state,
          selectedSurvey: action.selectedSurvey
        };
      case ActionTypes.OPEN_QUESTION_FORM:        
        return {
          ...state,
          isModalOpen: action.isOpen,
          selectedQuestion: action.question
        };
      case ActionTypes.CLOSE_QUESTION_FORM:        
        return {
          ...state,
          isModalOpen: action.isOpen,
          selectedQuestion: action.question
        }; 
      case ActionTypes.SAVE_QUESTION:
        const survey = state.selectedSurvey;
        let foundIndex = survey.questions.findIndex((q) => q.id === action.question.id);
        if (foundIndex >= 0) {
          survey.questions[foundIndex] = action.question;
        } else {
          survey.questions.push(action.question);
        }
        return {
          ...state,
          selectedSurvey: survey
        };    
      default:
        return state;
    }
  };
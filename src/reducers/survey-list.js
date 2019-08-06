import {
    SURVEYLIST_LOADED
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    switch (action.type) {
      case SURVEYLIST_LOADED:          
        return {
          ...state,
          surveys: action.payload          
        };
      default:
        return state;
    }
  };
// import {SET_LANGUAGE} from '../actions';
// import {setLanguage} from '../actions';

import * as actions from '../actions';

const initialState = {
    language:'en'
};

// Add your code for the languageReducer
export const languageReducer = (state=initialState, action)=>{
    if(action.type === actions.SET_LANGUAGE){
        return Object.assign({}, state, {
            language: action.language
        })
    }
    return state;
};

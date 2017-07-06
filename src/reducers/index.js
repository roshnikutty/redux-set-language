// import {SET_LANGUAGE} from '../actions';

import * as actions from '../actions';

const initialState = {
    language:'en'
};

// Reducer function checks and updates state of app
export const languageReducer = (state=initialState, action)=>{
    if(action.type === actions.SET_LANGUAGE){
        return Object.assign({}, state, {
            language: action.language
        })
    }
    return state;
};

export const SET_LANGUAGE = 'SET_LANGUAGE';

//Creating action creator function below that takes in a language
export const setLanguage = language =>({
    type: SET_LANGUAGE,
    language
});

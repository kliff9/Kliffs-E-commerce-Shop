import {  NOTE_LIST_FAIL, NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS } from "../constants/NotesConstants";
//fetch NOTEs from backend, state shouldnt be null
//Based on actions
export const NotesReducer = (state = {loading: true , NotesDataSave: [] }, action) => {
    switch(action.type){ // 
        case NOTE_LIST_REQUEST:
            return{ loading: true }
        case NOTE_LIST_SUCCESS:
            return {loading: false, NotesDataSave: action.payload }

        case NOTE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    } // the Request

}
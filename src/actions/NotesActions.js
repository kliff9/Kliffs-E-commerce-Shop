import Axios from "axios";
import { NOTE_LIST_REQUEST, NOTE_LIST_FAIL, NOTE_LIST_SUCCESS } from "../constants/NotesConstants"
// Get list of NOTEs from backend
export const listNotes = () => async (dispatch) => {
    dispatch({
    type: NOTE_LIST_REQUEST
    });
    try {
         const  { data } = await Axios.get('/api/notes/notes');
         console.log('Note_data:', data)

        dispatch({
            type: NOTE_LIST_SUCCESS, payload: data // naming convention for the property that holds the actual data in a Redux action object. That Passes its value
        })
    } catch(error) {
        dispatch({
            type: NOTE_LIST_FAIL, payload:error.message
        })

    }
}

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listNotes } from "../actions/NotesActions"
import LoadingBox from "../componets/LoadingBox"
import MessageBox from "../componets/MessageBox"
import Notes from "../componets/Notes"


export default function NotesScreen() { 

const NoteState = useSelector( state => state.NoteState) //useSelector is a function that takes the current state as an argument and returns whatever data you want from it
const { loading, NotesDataSave, error } = NoteState
const dispatch = useDispatch()
// B) An empty array []: the side-effect runs once after the initial rendering.

console.log('Note:', NotesDataSave)

useEffect(() => { 
  dispatch(listNotes())
}, [])
    return(
     // <div>
      <div>
      {loading? <LoadingBox></LoadingBox> : error? <MessageBox variant="danger">{error}</MessageBox> : (
    <div className="s">
      {NotesDataSave.map((NotesDataa) => ( <Notes key={NotesDataa._id} NotesDataa={NotesDataa} > </Notes>))};
 </div>
          
)}
      </div>
     // <div>test</div>
   //   </div>

    )
    
}


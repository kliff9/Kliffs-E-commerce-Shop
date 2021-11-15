

export default function Notes(P)  {

    const { NotesDataa } = P // In P which the varable is passed on we onlt take the product object
    return(
        <div key={NotesDataa._id} className="box">
            <h2>{NotesDataa.name}</h2>
            <div>{NotesDataa.descp}</div>
        </div>
    )

}
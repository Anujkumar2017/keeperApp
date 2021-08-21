import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Note from './component/Note';
// import notes from './notes';
import CreateArea from './component/CreateArea';


function App(){
    const [notes, setnotes]= React.useState([]);

    function addNote(newNote){
        
        setnotes(prevNotes=>{
            return [...prevNotes,newNote]
        })
    
    }

    function deleteNote(id){
        setnotes(prevNotes=>{
           return prevNotes.filter((note,index)=>{
                return id!==index;
            })
        })
    }

    return(
        <>
        <Header/>
        <CreateArea
            onadd={addNote}
        />
        {notes.map((note,index)=>{
            return(
                <Note 
                    id={index}
                    key={index} 
                    ondelete={deleteNote}
                    title={note.title} 
                    content={note.content}
                    
                />
            );
        })}
        
        <Footer/>
        </>
    )
}


export default App;
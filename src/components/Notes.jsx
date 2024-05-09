import React, { useEffect, useState } from 'react'
import styles from './Notes.module.css'
function Notes() {
    const[notes,setNotes] = useState();
    useEffect(()=>{
        const Note=localStorage.getItem('Notes');
        setNotes(Note);
    },[]);
    useEffect(()=>{
        if(notes)
        localStorage.setItem('Notes',notes);
    },[notes]);
  return (
    <div className={styles.notes}>
        <div className={styles.title}>All notes</div>
     <textarea  value={notes} onChange={(e)=>setNotes(e.target.value)} type='text' />

    </div>
   
  )
}

export default Notes;
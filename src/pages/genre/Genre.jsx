import React from 'react'
import styles from './genre.module.css';
import { useState } from 'react';
import action from '../../assets/action.png';
import drama from '../../assets/drama.png';
import horror from '../../assets/horror.png';
import musical from '../../assets/musical.png';
import western from '../../assets/western.png';
import fantacy from '../../assets/fantacy.png';
import fiction from '../../assets/fictional.png';
import romance from '../../assets/romance.png';
import thriller from '../../assets/thriller.png';
import Card from '../../components/card/Card';
import cross from '../../assets/cross.png';

function Genre() {


    const [genre,setGenre]=useState([
        {
        title: "Action",
        bgImg:"",
    },
    {
        title: "Drama",
        bgImg:"",
    },
    {
        title: "Romance",
        bgImg:"",
    },
    {
        title: "Fictional",
        bgImg:"",
    },
    {
        title: "Fantacy",
        bgImg:"",
    },
    {
        title: "Thriller",
        bgImg:"",
    },{
        title: "Western",
        bgImg:"",
    },
    {
        title: "Musical",
        bgImg:"",
    },]);
    const [selectedGenre,setSelectedGenre]=useState([1,3,5]);
    
    const removeItem=(items)=>{
        const newSelected=selectedGenre.filter((index)=>items!==index);
        setSelectedGenre(newSelected);
    }
  
    return (
    <div className={styles.body}>
        <div className={styles.left}>
            <h1 className={styles.title}>Moviestic</h1>
            <h1 className={styles.line}>Choose your entertainment category</h1>
            <div className={styles.selected}>
                {selectedGenre.map((items)=>(
                       <div key={items} className={styles.selects}>
                        {genre[items].title}
                        <button onClick={()=>removeItem(items)}> <img src={cross} alt="Button" /></button>
                        </div>
))}
 </div>
        </div>
        <div className={styles.right}>
            <Card name='Action' image={action}   colors='#FF5209'/>
            <Card name='Thriller' image={thriller}    colors='#D7A4FF'/>
            <Card name='Romance' image={romance}   colors='#148A08'/>
            <Card name='Horror' image={horror}   colors='#84C2FF'/>
            <Card name='Western' image={western}   colors='#902500'/>
            <Card name='Fantacy'  image={fantacy}   colors='#FF4ADE'/>
            <Card name='Musical' image={musical}   colors='#E61E32'/>
            <Card name='Drama' image={drama}   colors='#6CD061'/>
            <Card name='Fiction' image={fiction}   colors='#7358FF'/>
        </div>
    </div>
  )
}
export default  Genre;
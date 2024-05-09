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
import warning from '../../assets/warning.png';

function Genre() {
    // const[minLength,setMinLength]=useState(false);

    const [genre,setGenre]=useState([
        {
        title: "Action",
        bgImg:"",
    },
    {
        title: "Thriller",
        bgImg:"",
    },
    {
        title: "Romance",
        bgImg:"",
    },
    {
        title: "Horror",
        bgImg:"",
    },{
        title: "Western",
        bgImg:"",
    },
    {
        title: "Fantacy",
        bgImg:"",
    },
    {
        title: "Musical",
        bgImg:"",
    },
    {
        title: "Drama",
        bgImg:"",
    },
    {
        title: "Fictional",
        bgImg:"",
    }
]);
    const [selectedGenre,setSelectedGenre]=useState([1,3,8]);
    const removeItem=(items)=>{
        const newSelected=selectedGenre.filter((index)=>items!==index);
        setSelectedGenre(newSelected);
    }
    const addGenre=(index)=>{
        const number = parseInt(index);

        if (!selectedGenre.includes(number) && selectedGenre.length<4) {
            // If index doesn't exist, add it to selectedGenre
            setSelectedGenre([...selectedGenre, number]);
          }
    };

    const handleClick=()=>{
         localStorage.setItem("selectedGenre",JSON.stringify(selectedGenre));
        console.log(selectedGenre);
        window.location.href='/Homepage';
        // console.log(JSON.parse(localStorage.getItem("selectedGenre")));
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
                        </div>))}
                    
                        { selectedGenre.length<2 && <p  className={styles.para}><img src={warning} alt="" /> Minimun 2 category required</p>}
       </div>
        </div>
        <div className={styles.Right}>
            <div className={styles.innerRight}>
            <Card index='0' function={addGenre} name='Action' image={action}   colors='#FF5209'/>
            <Card index='1' function={addGenre} name='Thriller' image={thriller}    colors='#D7A4FF'/>
            <Card index='2' function={addGenre} name='Romance' image={romance}   colors='#148A08'/>
            <Card index='3' function={addGenre} name='Horror' image={horror}   colors='#84C2FF'/>
            <Card index='4' function={addGenre} name='Western' image={western}   colors='#902500'/>
            <Card index='5' function={addGenre} name='Fantacy'  image={fantacy}   colors='#FF4ADE'/>
            <Card index='6' function={addGenre} name='Musical' image={musical}   colors='#E61E32'/>
            <Card index='7' function={addGenre} name='Drama' image={drama}   colors='#6CD061'/>
            <Card index='8' function={addGenre} name='Fiction' image={fiction}   colors='#7358FF'/></div>
            </div>
            <button onClick={handleClick} className={styles.buttons}>
                Next  Page
            </button>
    </div>
  )
}
export default  Genre;
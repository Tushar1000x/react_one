import React,{useEffect, useState} from 'react';
import styles from './User.module.css';
import icon from '../assets/boy.png'

function User(props) {
    const[userData,setUser]=useState('');
    const[selectedGenre,setSelectedGenre]=useState([]);
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("currentUser")));
        setSelectedGenre(JSON.parse(localStorage.getItem("selectedGenre")));

    },[]);
    const [genre,setGenre]=useState([
        {title: "Action"},
        {title: "Thriller"},
        {title: "Romance"},
        {title: "Horror"},
        {title: "Western"},
        {title: "Fantacy"},
        {title: "Musical"},
        {title: "Drama"},
        {title: "Fictional"}
    ]);
  return (
    <div className={styles.card1} style={{width:props.width, height:props.height}}>
    <div className={styles.icon}><img src={icon} alt="" /></div>
    <div className={styles.info}>
     <div className={styles.userInfo}>
      <div className={styles.h} style={{fontSize:props.fontSize1}}> {userData.name}</div>
      <div className={styles.h} style={{fontSize:props.fontSize1}}> {userData.email}</div>
      <div className={styles.hh} style={{fontSize:props.fontSize2}}> {userData.userName}</div>
      </div>
      <div className={styles.selected}>
      {selectedGenre.map((items)=>(
            <div key={items} className={styles.selects}>
             {genre[items].title}
            </div>))}
      </div>
    </div>
 </div>
  )
}

export default User
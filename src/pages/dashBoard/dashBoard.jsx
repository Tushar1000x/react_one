import React from 'react'
import styles from '../dashBoard/dashBoard.module.css';
import Notes from '../../components/Notes';
import CountDown from '../../components/CountDown';
import Weather from '../../components/Weather';
import User from '../../components/User';
import News from '../../components/News';

function dashBoard() {
  return (
    <div className={styles.main}>
    <div className={styles.container}>
  <div className={styles.userWidget}><User fontSize1="1.2em" fontSize2="2em" /></div>
  <div className={styles.weatherApi}><Weather height="200px"/></div>
  <div className={styles.stopWatch}><CountDown/></div>
  <div className={styles.notes}><Notes/></div>
  <div className={styles.right}><News/></div>
  <button onClick={()=>{window.location.href='/Promotion'}} className={styles.Suggestions}>Get Movie Suggestions...</button>
</div></div>
  )
}

export default dashBoard;
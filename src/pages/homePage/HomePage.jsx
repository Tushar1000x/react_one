import React, { useState } from 'react';
import styles from './Homepage.module.css';
import icon from '../../assets/boy.png'
import { useEffect } from 'react';
import axios from 'axios';
import pressure from '../../assets/pressure.png';
import humidity from '../../assets/humidity.png';
import wind from '../../assets/wind.png';
import Weather from '../../components/Weather'
import User from '../../components/User';
import News from '../../components/News';
function HomePage() {

  return (
    <div className={styles.page}>
      <div className={styles.left} onClick={()=>{window.location.href='/DashBoard'}}>
        <User width="892px" height="380px" fontSize1="2.5em" fontSize2="4em"/>
        <Weather height="311px" width="892px"/>
      </div>
     <div className={styles.right}>
           <News/>
          
      </div>
       
    </div>
  )
}

export default HomePage;
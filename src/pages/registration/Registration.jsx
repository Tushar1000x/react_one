import React from 'react'
import { useState } from 'react';
import mainImg from '../../assets/main_img1.png';
import styles from './Registration.module.css';



 function Registration() {
    const [name,setName]=useState('');
    const [userName,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [consent,setConsent]=useState(false);
 

     const handleClick=()=>{
        if(!name || !userName || !email || !mobile){
           return alert('Fill all the blocks')
        }
        else{
            console.log(name,userName,email,consent,mobile);
        }
};
  return (
  
    <div>
          <div>
              <img src={mainImg} alt="Background_img" />
          </div>

          <div>
              <div>
              <h1>Moviestic</h1>
              <h2>Create your own account</h2>
              </div>

              <div>
                <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder='User Name' value={userName} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="tel" placeholder='Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                <div>
                    <input type="checkbox" value={consent} onChange={(e)=>setConsent(e.target.checked)}/>
                    <label htmlFor="">Share my registration data with Superapp</label>
                </div>
              </div>
              <div>
                <button onClick={handleClick}>SIGN UP</button>
                <p>By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</p>

              </div>
          </div>




    </div>
  )
}

export default Registration;
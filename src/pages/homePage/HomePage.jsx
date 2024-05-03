import React, { useState } from 'react';
import styles from './Homepage.module.css';
import icon from '../../assets/boy.png'
import { useEffect } from 'react';
import axios from 'axios';
import pressure from '../../assets/pressure.png';
import humidity from '../../assets/humidity.png';
import wind from '../../assets/wind.png';
function HomePage() {
 
    const [dateTime, setDateTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDateTime(new Date());
      }, 1000); // Update every second
  
      // Clean up the interval when the component unmounts
     
    }, []);
  


    const NEWS_KEY = process.env.REACT_APP_NEWS_API_KEY;
  const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;
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
  const [News,setNews] =useState(null);
  const [weather,setWeather] =useState(null);
  const[userData,setUser]=useState('');
  const[selectedGenre,setSelectedGenre]=useState([]);

    // const fetchWeatherApi= async ()=>{
    //      const {data,status}=await axios.get(
    //         `https://api.weatherapi.com/v1//current.json?KEY=${WEATHERKEY}%20&q=mumbai`
    //             );
    //         if(status==200)
    //         console.log(data.current);
    //         }

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("currentUser")));
        setSelectedGenre(JSON.parse(localStorage.getItem("selectedGenre")));
       
        const fetchWeatherData = async () => {
          try {
            const response = await axios.get(
              `https://api.weatherapi.com/v1//current.json?KEY=${WEATHER_KEY}&q=Mumbai`
            );
            setWeather(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
        const fetchNewsData = async () => {
          try {
            const responseNews = await axios.get(
              `https://newsapi.org/v2/everything?q=keyword&apiKey=${NEWS_KEY}`
            );
            setNews(responseNews.data.articles[10]);
            console.log(responseNews.data.articles[0]);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
      
        fetchWeatherData();
        fetchNewsData();
    },[]);


    function formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return date.toLocaleDateString('en-US', options).replace(/\//g, '-');
    }
    function formatPublish(date){
     
    }

  return (
    <div className={styles.page}>

        <div className={styles.left}>
            <div className={styles.card1}>
               <div className={styles.icon}><img src={icon} alt="" /></div>
               <div className={styles.info}>
                <div className={styles.userInfo}>
                 <h3> {userData.name}</h3>
                 <h3> {userData.email}</h3>
                 <h1> {userData.userName}</h1>
                 </div>
                 <div className={styles.selected}>
                 {selectedGenre.map((items)=>(
                       <div key={items} className={styles.selects}>
                        {genre[items].title}
                       </div>))}
                 </div>
               </div>
            </div>
            <div className={styles.card2}>
            <div className={styles.dateTime}>
              <h1> {formatDate(dateTime)}</h1>
             <h1>{dateTime.toLocaleTimeString()}</h1>
            </div>
         
            {weather ? (

          <div className={styles.weatherData}>

            <div className={styles.condition}>
              <img src={weather.current.condition.icon} alt="" />
            <h2>{weather.current.condition.text}</h2>
            </div>
            <div className={styles.verticalLine}></div>

            <div className={styles.temp}>
            <h2> {weather.current.temp_c} °C</h2>
            <div className={styles.temp1}><img src={pressure} alt="" /> <h4>{weather.current.pressure_mb} mbar <br />Pressure</h4>
</div></div>
<div className={styles.verticalLine}></div>
            <div className={styles.wind}>
              <div className={styles.wind1}> 
                <img src={wind} alt="" />
                 <h4> {weather.current.wind_kph} Km/h <br />Wind</h4></div>
          <div className={styles.humid1}>
            <img src={humidity} alt="" />
            
            <h2> {weather.current.humidity} % <br />Humidity </h2>

          </div>
            </div>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
        </div>
      </div>

        <div className={styles.right}>
           
            {News && (
            <div className={styles.news}>
              <div className={styles.upper}> 
                <img src={News.urlToImage} alt="" />
              <div className={styles.overlay}>           
            <h1>{News.title}</h1>
            <h3>{News.publishedAt}</h3>
              </div>
              </div>
             
      
              <div className={styles.para}> {News.description}</div>
           
        </div>
      )}
     
     
        </div>

    </div>
  )
}

export default HomePage;
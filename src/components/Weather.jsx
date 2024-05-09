import React, {useState,useEffect} from 'react'
import styles from './Weather.module.css';
import icon from '../assets/boy.png'
import axios from 'axios';
import pressure from '../assets/pressure.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';

function Weather(props) {
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
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

        fetchWeatherData();
    },[]);


    function formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      return date.toLocaleDateString('en-US', options).replace(/\//g, '-');
    }


  return (
    <div className={styles.card2} style={{height:props.height, width:props.width}}>
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


  )
}

export default Weather
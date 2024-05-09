import React,{useEffect,useState} from 'react';
import axios from 'axios';
import styles from './News.module.css';
function News() {
    const NEWS_KEY = process.env.REACT_APP_NEWS_API_KEY;

    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
    }, []);
    const [News,setNews] =useState(null);

    useEffect(()=>{
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
        fetchNewsData();
    },[]);

  return (
    
    <div onClick={() => { window.location.href = News.url }}className={styles.right}>
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
  )
}

export default News
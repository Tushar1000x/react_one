import styles from './Card.module.css';
import soundFile from '../../assets/happy-pop-2-185287.mp3';

 function Card(props) {
   
        const playSound = () => {
          const sound = new Audio(soundFile);
          sound.play();
        };
    const color=props.colors;

    const stopSound = () => {
        const sound = new Audio(soundFile);
        sound.pause();
      };

    return (
    
 <div onClick={()=>{props.function(props.index)}} className={styles.card} style={{backgroundColor: color , borderColor: color}}  onMouseEnter={playSound} onMouseLeave={stopSound} >
                <h2>{props.name}</h2>
                <img className={styles.moviecard} src={props.image} alt="movie_img"  />
             </div>

   
  )
}

export default Card;

import React, { useEffect, useState } from "react";
import axios from "axios";
import SuggestMovies from "./SuggestMovies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Promotion.module.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import userAvatar from '../../assets/userAvatarBG.png';

function PromotionPage() {
    const [results, setResults] = useState(); // contains the list of all shows from the API
	const [selectedGenres, setSelectedGenres] = useState([0, 1, 2, 3, 4, 5]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.tvmaze.com/shows");
      setResults(response.data);
    };
    fetchData();
  }, []);

 
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h2>Moviestic</h2>
          <h4>Entertainment According your choice</h4>
        </div>
        <img className={styles.avatar} src={userAvatar} alt="" />
      </div>

      {selectedGenres?.map(
				(
					genre,
					index // [0, 2, 5, 6] storing the index of genres
				) => (
                  	<div className={styles.movieSuggest}>
                            <SuggestMovies key={index} index={genre} movies={results} /> 
                      </div>
                )
			)}
    </div>
  );
}

export default PromotionPage;


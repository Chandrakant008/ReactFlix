
import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const { id } = useParams();      
                                            // Get the dynamic id parameter from the URL
  const navigate = useNavigate();                                                   
   

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const [error, setError] = useState(false);                                                                                 // Error state to handle API errors

  const API_KEY = '779ca79add0c7fa093d36b88f5d44e62';                                                                         // API key

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          setError(true);                                                                                                        // Set error if no results found
        }
      })
      .catch((err) => {
        console.error(err);
        setError(true);                                                                                                           // Set error if request fails
        
      });
  }, [id]);                                                                                                                  // Re-fetch data if the id changes

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      {error ? (
        <div className="error-message">An error occurred. Please try again later.</div>
      ) : (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData?.key || ""}`}
          title={apiData?.name || "Trailer"}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
      <div className="player-info">
        <p>Published Date: {apiData?.published_at?.slice(0, 10)}</p>
        <p>Name: {apiData?.name}</p>
        <p>Type: {apiData?.type}</p>
      </div>
    </div>
  );
};

export default Player;

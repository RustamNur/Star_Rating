import React, { useState } from "react";
import "./App.css";
import {FaStar} from 'react-icons/fa'

const App = ({ numOfStars = 10 }) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  
  const handleClick = getCurrentIndex => {
    setRating(getCurrentIndex)
  }
  const handleMouseEnter = getCurrentIndex => {
    setHover(getCurrentIndex)
  }
  const handleMouseLeave = () => {
    setHover(rating)
  }
  return (
    <div className="App">
      <h2>Rating...</h2>
      {
        [...Array(numOfStars)].map((_, index) => {
          index += 1
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              size={40}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={()=>handleMouseLeave()}
            />
          )
        })
     }
    </div>
  );
};

export default App;

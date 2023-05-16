import React, { useState } from "react";
import styled from "styled-components";

let Img = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 15px 15px 0px 0px;
  cursor: pointer;
  background-color:green;
`;

const MovieSearch = () => {
  let [search, setSearch] = useState("");
  let [data, setData] = useState([]);
  let handleChange = (e) => {

    return(
    setSearch(e.target.value)
    ) 
  };
  let onsearch = (e) => {
    e.preventDefault();
    
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=b7b7509a`)
      .then((response) => response.json())
      .then((value) => setData(value.Search));
  };

  return (
    <>
    
    <div className="jaga">
      <form className="fo" action="" onSubmit={onsearch}  >
        <span className="mc">Welcome to Movies World </span>
        <div className="surm">Search your fovarate movie</div>
        <input type="text" onChange={handleChange}  value={search} />

        <button className="bt" type="submit">Search</button>
      </form>
      
        
    
      </div>
      {console.log(data)}
      {console.log(setData)}

      <div className="card-main">
        {  data.map((movie, index) => (
          <div className="card">
            <div className="a">sl.no: {index + 1}</div>
            <div className="card-head">
              <Img className="mps" src={movie.Poster} alt="no poster" />
            </div>
            <div className="card-body">
              <div className="cd">Title: {movie.Title}</div>
              <div className="cd">Year:{movie.Year}</div>
              <div className="cd">Type:{movie.Type}</div>
            </div>
            <div className="card-foot">
              <div className="card-foot">
                <button className="btn">Read More...</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieSearch;

import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {
  // Fetch Data from TMDB API and update store
  // call custom hook useNowPlaying movies hook

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryMovieContainer />

      {/* 
      Planning
      -Main video container
         -video background
         -movie list
      -secondary container
        -Movie List * n
         -cards * n
      
       */}
    </div>
  );
};

export default Browse;

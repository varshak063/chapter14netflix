import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useBackgroundVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonResults = await data.json();
    const filterTrailerData = jsonResults.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailerData?.length
      ? filterTrailerData[1]
      : jsonResults?.results[1];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};
export default useBackgroundVideo;

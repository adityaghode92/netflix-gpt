import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggetions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames) return null;
  return (
    <div className=" md:pl-10 mt-10 bg-black  bg-opacity-90 text-white">
      <div>
        {movieNames.map((movieName,index)=>{
          return (
             <MovieList key={movieName} movieTitle={movieName} movies = {movieResults[index]}/>)
        })}
       
      </div>
    </div>
  );
};

export default GptMovieSuggetions;

import Movies from "../movies.json";
import { CardM } from "./Card-m";
import "./Grid.css";

export function MoviesgridM() {
    return (
    <ul className="moviesGrid">
      {Movies.map((movie) => (
         <CardM key={movie.id} movie={movie} />
      ))}
    </ul>
    );
}

export default MoviesgridM;
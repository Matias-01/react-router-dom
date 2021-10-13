import Movies from "../movies.json";
import { Card } from "./Card";
import "./Grid.css";

export function Moviesgrid() {
    return (
    <ul className="moviesGrid">
      {Movies.map((movie) => (
         <Card key={movie.id} movie={movie} />
      ))}
    </ul>
    );
}

export default Moviesgrid;
import "./Card.css";
import MoviePoster from './default-movie.svg'
export function CardM({movie}) {
    // const imageUrl    = "https://image.tmdb.org/t/p/w300" + movie.poster_path    
    const yearRelease = movie.release_date.substring(0,4)
    const textCard    = movie.title + " (" + yearRelease + ")"
    return <li className="Card">
               <img width="230" height="345" className="Image" src={MoviePoster} alt={movie.title} />
               <div>{textCard}</div>
           </li> 
}
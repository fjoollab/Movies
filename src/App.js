
import {useEffect, useState} from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=24b7db29';

const movie1 ={
    "Title": "Discount Spiderman 2",
    "Year": "2018",
    "imdbID": "tt9146610",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2U4NjY2YTQtZDFiYS00YTk2LTk5NDItMWVlNmIwZjYyZmE5XkEyXkFqcGc@._V1_SX300.jpg"
    
}


const App = () => {

   const [movies, setMovies] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');

    }, []);


    return(
        <div className="app">
            <h1>MoviesWorld</h1>

            <div className="search">
                <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                src={SearchIcon}
                alt="Search"
                onClick={() => searchMovies(searchTerm)}
                />
              

            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies found</h2>

                    </div>
                )}

            

        </div>
    );

}

export default App;
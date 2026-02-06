import '../css/Home.css'
import MovieCard from "../components/Movie.jsx";
import { useState, useEffect } from 'react'
import { getPopularMovies, searchMovies } from '../services/api.js';


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (e) {
                console.error(e);
            }
        }

        fetchMovies();
    }, []);

    function submitForm() { alert("form submitted") };

    return (
        <div className="home">
            <form className="search-form" onSubmit={submitForm}>
                <input type="text" placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-btn">Search</button>
            </form>

            {movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />;
            })}
        </div>
    );
}

export default Home;
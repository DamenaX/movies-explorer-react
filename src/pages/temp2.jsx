import MovieCard from "../components/Movie.jsx";
import { useState } from 'react'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: "John Wick", year: "2013" },
        { id: 2, title: "Terminator", year: "1999" },
        { id: 3, title: "The Matrix", year: "1999" }
    ]

    function submitForm() {alert("form submitted")};

    return (
        <div>
            <form className="search-form" onSubmit={submitForm}>
                <input type="text" placeholder="Search" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-btn">Search</button>
            </form>

            {movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie}/>;
            })}
        </div>
    );
}

export default Home;
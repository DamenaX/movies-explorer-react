function MovieCard({movie}) {
    function favoriteToggle() {

    }

    return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.img} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={favoriteToggle}></button>
            </div>
        </div>
        <div className="movie-info">
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
        </div>
    </div>
    );
}

export default MovieCard;
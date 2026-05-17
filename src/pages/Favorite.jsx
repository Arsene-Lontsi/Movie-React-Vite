import '../css/Favorites.css'

import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../context/MovieContext'

function Favorites() {

    const { favorites } = useMovieContext();

    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>

                <div className="movies-grid">
                    {favorites.map(movie =>
                        <MovieCard key={movie.id} movie={movie} />
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>This is the Favorite page where you can see your favorited movies.</p>
        </div>
    )
}

export default Favorites
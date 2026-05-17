import '../css/Home.css'

import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api"

function Home() {

    const [searchTerm, setSearchTerm] = useState("");
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setPopularMovies(movies);
            } catch (err) {
                setError("Failed to fetch popular movies. Please try again later.");
                console.error("Error fetching popular movies:", err);
            } finally {
                console.log("Finished fetching popular movies.");
                setLoading(false);
            }
        };

        fetchPopularMovies();
    }, []);


    const onSearchSubmit = async (e) => {
        e.preventDefault();
        if(!searchTerm.trim()) return
        if(loading) return

        setLoading(true);

        try{
            const searchResults = await searchMovies(searchTerm);
            setPopularMovies(searchResults)
            setError(null);
        }catch(err){
            setError("Failed to search movies. Please try again later.");
            console.error("Error searching movies:", err);
        }finally{
            setLoading(false);
        }
    } 

    return (
        <div className="home">

            <form onSubmit={onSearchSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (<p>Loading movies...</p>) : (
                <div className="movies-grid">
                    {popularMovies.map(movie =>
                        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                        <MovieCard key={movie.id} movie={movie} />
                    )}
                </div>
            )}

        </div>
    );
}

export default Home
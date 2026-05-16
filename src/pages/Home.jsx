import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {

    const [searchTerm, setSearchTerm] = useState("");

    const movies = [
        { id: 1, title: "Inception film", release_date: "2010-07-16", url: "https://m.media-amazon.com/images/I/51s+qjv9ZlL._AC_.jpg" },
        { id: 2, title: "The Dark Knight film", release_date: "2008-07-18", url: "https://m.media-amazon.com/images/I/51s+qjv9ZlL._AC_.jpg" },
        { id: 3, title: "Next Inception film", release_date: "2010-07-16", url: "https://m.media-amazon.com/images/I/51s+qjv9ZlL._AC_.jpg" },
        { id: 4, title: "The New White Knight film", release_date: "2008-07-18", url: "https://m.media-amazon.com/images/I/51s+qjv9ZlL._AC_.jpg" },
    ]

    const onSearchSubmit = (e) => {
        e.preventDefault();
        alert(`You searched for: ${searchTerm}`);
        setSearchTerm("");
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

            <div className="movies-grid">
                {movies.map(movie =>
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    );
}

export default Home
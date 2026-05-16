import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      < MovieCard movie={{ title: "Inception film", release_date: "2010-07-16", url: "https://m.media-amazon.com/images/I/51s+qjv9ZlL._AC_.jpg" }} />
    </>
  );
}

export default App

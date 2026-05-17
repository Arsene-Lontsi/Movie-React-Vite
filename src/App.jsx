import './css/App.css'

import { Routes, Route } from 'react-router-dom'

import { MovieProvider } from './context/MovieContext'

import Home from './pages/Home'
import Favorites from './pages/Favorite'
import Navbar from './components/Navbar'




function App() {

  return (
    <MovieProvider>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App




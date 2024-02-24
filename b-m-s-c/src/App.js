
import './App.css';
import axios from 'axios';
// import {env} from "dotenv";

// React Slicks CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Routing
import {Routes, Route} from "react-router-dom";

// Pages
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';
import PlayPage from './pages/Play.Page';

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"] = "b0380404025ff71ff7222783b12710df";

// ?api_key=b0380404025ff71ff7222783b12710df
function App() {
  return <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/movie/:id' element={<MoviePage />} />
    <Route path='/plays' element={<PlayPage />}/>
  </Routes>
}

export default App;

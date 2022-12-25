import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './Home';
import Fyve from './Fyve';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  // const location = useLocation();
  // console.log(location.pathname);
  // return <span>Path : {location.pathname}</span>

  useEffect(() => {
    let nama = prompt("What is your name sir ?", "Sir")
    if (nama != null) {
      alert(`Welcome ${nama}`)
    } else {
      alert("Welcome, Sir")
    }
  }, [])

  return (
    <div>
      <div className="navbar">
        <Navigation />
      </div>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/Fyve'
          element={<Fyve />}
        />
      </Routes>
    </div>
  );
}

export default App;

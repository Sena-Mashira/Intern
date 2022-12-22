import './App.css';
import Header from './components/header';
import Statement from './components/statement';
import About from './components/about/aboutindex';
import Contact from './components/contact';

function App() {
  return (
    <div className='main'>
      <div className='landing'>
        <Header />
      </div>
      <div className='summary'>
        <Statement />
      </div>
      <div className='about'>
        <About />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;

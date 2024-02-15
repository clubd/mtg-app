import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Header />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

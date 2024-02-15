import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element= {<HomePage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

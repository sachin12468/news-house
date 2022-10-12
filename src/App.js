import './App.css';
import Menubar from './components/Menubar';
import Navbar from './components/Navbar';
import News from './components/News';
import NewsState from './context/news/NewsState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <NewsState>
      <Router >
        <Navbar />
        <div className='d-flex flex-wrap justify-content-center'>
          <Menubar />
          <Routes>
            <Route exact path='/' element={<News />} />
          </Routes>
        </div>
      </Router>
    </NewsState>
  );
}

export default App;

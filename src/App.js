import logo from './logo.svg';
import Registration from './pages/registration/Registration';
import './App.css';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';
import Genre from './pages/genre/Genre';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Registration />} />
    <Route path='/Genre' element={<Genre />} />
    <Route path='/HomePage' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

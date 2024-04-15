import logo from './logo.svg';
import Registration from './pages/registration/Registration';
import './App.css';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Registration />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

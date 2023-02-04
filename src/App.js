import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import LandingPage from './component/LandingPage';
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import QuizSubject from './component/QuizSubject';

function App() {
  return (
    <>
    <Header/>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      {/* <Route/> */}
      <Route path='/subject' element={<QuizSubject/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

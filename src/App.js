import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero';
import Test from './components/Test';
import Header from './components/Header';
import Classess from './components/Classes';
import Responsive from './components/Responsive'
import Tailwind from './components/Tailwinds'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tailwinds from './components/Tailwinds';

function App() {




  return (
    <>

      <div className='overflow-hidden'>

      <Header/>

        <BrowserRouter>

          <Routes>

            <Route path='/' element={<Hero/>}/>
            <Route path='/class' element ={<Classess/>}/>
            <Route path='/responsive' element={<Responsive/>}/>
            <Route path='/contact' element={<Tailwinds/>}/>


            <Route path='/test' element={<Test/>}/>
         
          </Routes>

        </BrowserRouter>



      </div>

    </>
  );
}

export default App;

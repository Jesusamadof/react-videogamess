
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Playstation from './components/paginas/Playstation';
import Swittch from './components/paginas/Swittch';
import Xbox from './components/paginas/Xbox';
import Home from './components/paginas/Home';
import News from './components/paginas/News';
import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Carrito from './components/Carrito';
import Auth0 from './components/Auth0';
import NotFound from './components/paginas/NotFound';


const App = () => {
    

    
    
    return (
        <div className='App'>
             

   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/News" element={<News/>}/>
        <Route exact path="/Playstation" element={<Playstation/>}/>
        <Route exact path="/Xbox" element={<Xbox/>}/>
        <Route exact path="/Swittch" element={<Swittch/>}/>
        <Route exact path="/Carrito" element={<Carrito/>}/>
        <Route exact path="/Auth0" element={<Auth0/>}/>
        <Route exact path="*" element={<NotFound/>}/>
        
       </Routes>
    </Router>

    
             
            
       
               

    </div>   

    );
 
};


export default withAuthenticationRequired(App);
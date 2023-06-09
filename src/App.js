
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Playstation from './components/paginas/Playstation';
import Swittch from './components/paginas/Swittch';
import Xbox from './components/paginas/Xbox';
import Home from './components/paginas/Home';
import News from './components/paginas/News';
import {  withAuthenticationRequired } from '@auth0/auth0-react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrito from './components/Carrito';
import Auth0 from './components/Auth0';
import Paypal from './components/paginas/Paypal';




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
        <Route exact path="/Paypal" element={<Paypal/>}/>
        <Route exact path="/Auth0" element={<Auth0/>}/>
       </Routes>
    </Router>

    
             
            
       
               

    </div>   

    );
 
};


export default withAuthenticationRequired(App);
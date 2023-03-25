
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Playstation from './components/paginas/Playstation';
import Swittch from './components/paginas/Swittch';
import Xbox from './components/paginas/Xbox';
import Home from './components/paginas/Home';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const App = () => {
    const { isAuthenticated, logout, user } = useAuth0();

    return (
        <div >
             <Home/>
            <span>Hi, {user.name} <img width={50} height={50} src={user.picture} alt="" /></span>
            <div>Logged: {String(isAuthenticated)}</div>
            <div>Verified: {String(user.email_verified)}</div>
            <button onClick={logout}>Logout</button>
          
        </div>
    );
 
};


export default withAuthenticationRequired(App);
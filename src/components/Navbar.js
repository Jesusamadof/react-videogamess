import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  return (
    <>
    <nav className="navbar bg-primary" data-bs-theme="info">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Infinity Game HN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <a href="/Home"><img src="images/home.png" alt="Home"/></a>
        </li>
        <br>
        {/* Un comentario JSX */}
        {/* este es un espacio*/}
        </br>
        <li className="nav-item">
          
          <a className="nav-link" href="/News">News</a>
        </li>
        <br>
        </br>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Plataforms
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/Playstation"><img src="images/playstation.png" alt="playstation"/>Playstation</a></li>
            <li><a className="dropdown-item" href="/Xbox"><img src="images/xbox.png" alt="xbox"/>Xbox</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/Swittch"><img src="images/nintendo-switch.png" alt="#"/>Nintendo Switch</a></li>
            </ul>
            </li>
      
       
      <li><a href="/Carrito"><img src="images/carrito.png" alt="carrito"/></a></li>
          
      <li><a href="#"><img src="images/login.png" alt="login"/></a></li>
       
     
      <ul>
        <li className="nav-item">
        <button onClick={logout} class="btn btn-outline-dark">Logout</button>
        
        </li>
        
        </ul>
        <ul>
          <li>
        <a className="nav-link" href="/MetaData">MetaData</a>
        </li>
        </ul>
        </ul> 
    </div>
  </div>
</nav>
</nav>
</>
  )
}
export default Navbar





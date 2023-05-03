import React from 'react';
import { ProductList } from '../ProductList';
import { useAuth0 } from '@auth0/auth0-react';

const Swittch = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  return (
    <div>    
         <header class="header">
      <div class="container logo-nav-container">
        <a href="/Home" class="logo"><h1>InfinityGameHn</h1></a>
        <img src="images/logo2.png"/>
      <nav class="navegation">
        <ul>
          <li><a href="/Home"><img src="images/home.png" alt="Home"/></a></li>
          <li><a href="#">PLATFORMS</a>
            <ul>
              <li><a href="/playstation"><img src="images/playstation.png" alt="playstation"/>PlayStation</a></li>
              <li><a href="/xbox"><img src="images/xbox.png" alt="xbox"/>Xbox</a></li>
              <li class="ultimo"><a href="/Swittch"><img src="images/nintendo-switch.png" alt="#"/>Nintendo Switch</a></li>
            </ul>
          </li>
          <li><a href="/News">NEWS</a></li>
          <li><a href="/Carrito"><img src="images/carrito.png" alt="carrito"/></a></li>
          <li><a href="#"><img src="images/login.png" alt="login"/></a></li>
          <button onClick={logout}>Logout</button>
      </ul>
      </nav>
      </div>
      </header>
          
    
   
     
      <ProductList/>

    <footer class="footer">
        <div class="grupo1">
          <div class="box">
            <figure>
              <a><img src="images/logo2.png"/></a><h2>InfinityGameHn</h2>
            </figure>
          </div>
          
          <div class="box">
            <h2>Follow Us</h2>
            <div class="red-social">
            <a href="https://www.facebook.com/profile.php?id=100091747251741&mibextid=LQQJ4d"><img src="images/facebook.png" alt="Facebook"/></a>
  <a href="https://twitter.com/infinitygamehn?s=11&t=nJWiJqBPb_H5O-q4xwh5mg"><img src="images/twitter.png" alt="Twitter"/></a>
  <a href="https://www.instagram.com/invites/contact/?i=zpm6d5qmsmdr&utm_content=rcedlwg"><img src="images/instagram.png" alt="Instagram"/></a>
  <a href="https://twitch.tv/infinity_game_hn"><img src="images/twitch.png" alt="Twitch"/></a>
            </div>
          </div>
  
          <div class="box">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ut consectetur odit sapiente accusamus? Obcaecati sapiente 
              consequuntur deleniti veniam sint laboriosam rerum aspernatur 
              odio ipsum facilis! Sapiente labore numquam commodi voluptas.
            </p>
        </div>
  
        </div>
  
        <div class="grupo2">
          <small>&copy; 2023 <b>InfinityGameHn</b> - Todos los Derechos Reservados</small>
        </div>
      </footer>


      
    </div>
  )
}



export default Swittch
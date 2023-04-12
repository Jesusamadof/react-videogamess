import React from 'react';
import Navbar from '../Navbar';
import {ProductList3} from '../ProductList3'; 
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
const Xbox = () => {
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
              <li><a href="/Playstation"><img src="images/playstation.png" alt="playstation"/>PlayStation</a></li>
              <li><a href="/Xbox.html"><img src="images/xbox.png" alt="xbox"/>Xbox</a></li>
              <li class="ultimo"><a href="/Swittch"><img src="images/nintendo-switch.png" alt="#"/>Nintendo Switch</a></li>
            </ul>
          </li>
          <li><a href="news.html">NEWS</a></li>
          <li><a href="/Carrito"><img src="images/carrito.png" alt="carrito"/></a></li>
          <li><a href="#"><img src="images/login.png" alt="login"/></a></li>
          <button onClick={logout}>Logout</button>
      </ul>
      </nav>
    </div>
    </header>

     <ProductList3/>

    <main class="main">
      <h2>Xbox</h2>
      <section class="container">
        <article class="juego1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Ea libero consequatur dolorum alias doloribus, quo delectus. 
          Et atque necessitatibus, a quasi temporibus maxime blanditiis 
          asperiores perspiciatis. Deleniti non laudantium aspernatur.
        </article>

        <article class="juego2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Ea libero consequatur dolorum alias doloribus, quo delectus. 
          Et atque necessitatibus, a quasi temporibus maxime blanditiis 
          asperiores perspiciatis. Deleniti non laudantium aspernatur.
        </article>

        <article class="juego3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Ea libero consequatur dolorum alias doloribus, quo delectus. 
          Et atque necessitatibus, a quasi temporibus maxime blanditiis 
          asperiores perspiciatis. Deleniti non laudantium aspernatur.
        </article>
      </section>
    </main>

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
              <a href="https://www.facebook.com"><img src="images/facebook.png" alt="Facebook"/></a>
              <a href="https://www.twitter.com"><img src="images/twitter.png" alt="Twitter"/></a>
              <a href="https://www.instagram.com"><img src="images/instagram.png" alt="Instagram"/></a>
              <a href="https://www.instagram.com"><img src="images/twitch.png" alt="Twitch"/></a>
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

export default Xbox
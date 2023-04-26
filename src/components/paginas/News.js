import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div>
       <header class="header">
      <div class="container logo-nav-container">
        <Link to="/Home" class="logo"><h1>InfinityGameHn</h1></Link>
        <img src="images/logo2.png"/>
      <nav class="navegation">
        <ul>
          <li><Link to="/Home"><img src="images/home.png" alt="Home"/></Link></li>
          <li><a href="#">PLATFORMS</a>
            <ul>
              <li><Link to="/Playstation"><img src="images/playstation.png" alt="playstation"/>PlayStation</Link></li>
              <li><Link to="/Xbox"><img src="images/xbox.png" alt="xbox"/>Xbox</Link></li>
              <li class="ultimo"><Link to="/Swittch"><img src="images/nintendo-switch.png" alt="#"/>Nintendo Switch</Link></li>
            </ul>
          </li>
          <li><a href="#">NEWS</a></li>
          <li><a href="/Carrito"><img src="images/carrito.png" alt="carrito"/></a></li>
          <li><a href="#"><img src="images/login.png" alt="login"/></a></li>
          <li><a href="/auth0">SIGN UP</a></li>
      </ul>
      </nav>
    </div>
    </header>

    
        <section class="container">
            <article>
                <iframe src="https://www.gamespot.com/news/" width="1510px" height="900px" sandbox="allow_forms">No se puede cargar el iframe</iframe>
            </article>
        </section>
    
   
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

export default News
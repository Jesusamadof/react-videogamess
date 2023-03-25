import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-dark" data-bs-theme="light">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Infinity Game HN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <a href="index.html"><img src="images/home.png" alt="Home"/></a>
        </li>
        <br>
        {/* Un comentario JSX */}
        {/* este es un espacio*/}
        </br>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
        <br>
        </br>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plataforms
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="./Componentes/paginas/Playstation.js">Playstation</a></li>
            <li><a className="dropdown-item" href="Xbox.js">Xbox</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="Swittch.js">Nintendo Switch</a></li>
            </ul>
            </li>
      
        <li>  
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
         </li>
      <ul>
        <li className="nav-item">
        <a className="nav-link" href="">Sign Up</a>
        
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





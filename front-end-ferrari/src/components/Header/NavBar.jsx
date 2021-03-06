import React from "react";
import { Link } from "react-router-dom";
import "../Header/style.css";
import Logo from "../../assets/img/logo-ferrari.png";
function NavBar(){
return(
<>
<div className="container-fluid">
   <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" ><img src={Logo} title="Scuderia Ferrari" alt="Logo Scuderia Ferrari" /></a>
      <span className="text-center"> Scuderia Ferrari </span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse header flex-row-reverse" id="navbarNav">
         <ul className="navbar-nav">
            <Link to="/">
            <li className="nav-item">
               <a className="nav-link" aria-current="Página Inicial">Home</a>
            </li>
            </Link>
            <Link to="/equipe">
            <li className="nav-item">
               <a className="nav-link" aria-current="Página sobre a Equipe">Equipe</a>
            </li>
            </Link>
            <Link to="/sobre">
            <li className="nav-item">
               <a className="nav-link" aria-current="Página sobre a Scuderia Ferrari">Sobre</a>
            </li>
            </Link>
         </ul>
      </div>
   </nav>
</div>
</>
);
}
export default NavBar;


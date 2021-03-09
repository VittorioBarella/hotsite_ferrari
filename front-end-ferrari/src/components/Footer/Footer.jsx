

import React from "react";
import '../Footer/style.css';
function Footer(){
    return(
         <footer className="mainfooter" role="contentinfo">
            <div className="footer-middle">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6 col-sm-6">
                        <div className="footer-pad">
                           <h4>Loja</h4>
                           <ul className="list-unstyled">
                              <li><a href="https://store.ferrari.com/en-gb/men/clothing/?from=FT">Homem</a></li>
                              <li><a href="https://store.ferrari.com/en-gb/women/clothing/?from=FT">Mulher</a></li>
                              <li><a href="https://store.ferrari.com/en-gb/kids/boys/?from=FT">Crianças</a></li>
                              <li><a href="https://store.ferrari.com/en-gb/watches/men/?from=FT">Relógios</a></li>
                              <li><a href="https://store.ferrari.com/en-gb/men/accessories/puma-shoes%20?from=FT">Tênis</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-md-3 col-sm-3">
                        <h4>Follow Us</h4>
                        <ul className="social-network social-circle">
                           <li><a href="https://www.facebook.com/ScuderiaFerrari" className="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                           <li><a href="https://www.linkedin.com/company/ferrari/" className="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="row copyright">
                     <div className="col-md-12 copy">
                        <p className="text-center">&copy; Copyright 2021 - Scuderia Ferrari.  Todos os Direitos Reservados.</p>
                        <p className="text-center">Desenvolvido por Vittório de Andrade Barella</p>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
    );
}
export default Footer;


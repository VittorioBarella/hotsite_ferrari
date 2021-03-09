import React from "react";
import '../../components/Sobre/style.css';
import FerrariSobre from  "../../assets/img/Ferrari-Sobre.jpg";
import Monza from "../../assets/img/leclerc-vitoria-monza.jpg";
import VettelVictory from "../../assets/img/Vettel-Victory.jpg";
import VettelLeclerc from "../../assets/img/Charles-Vettel.jpg";
import CharlesVictory from "../../assets/img/Charles-Victory.jpg";
function Sobre(){
    return(
        <>
          <div className="container-fluid">
            {/* INÍCIO BANENER. */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron bg-cover-sobre text-white">
                            <div className="container">
                            <h1 className="display-4">Poder,Desempenho e Beleza</h1>
                            <p className="lead">Carros de passeio V12 e V8 que unem função e forma na perfeição.</p>
                            <p>Ferrari, uma história sem igual.</p>
                            <a className="btn btn-light btn-lg" href="https://corporate.ferrari.com/en/about-us/product-range" role="button">Saiba Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* INÍCIO FIM. */}
                <div className="jumbotron">
                    <div className="container text-center text-lg-left">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="display-4">A Excelência Italiana que
                                o Mundo só Pode Sonhar.
                                </h1>
                                <p className="lead">Essere Ferrari</p>
                                <span className="text-center d-inline-block">
                                    <a className="btn btn-success btn-lg w-100 btn-saiba-mais" href="https://corporate.ferrari.com/en/about-us" role="button">Saiba Mais</a>
                            </span>
                            </div>
                            <div className="col-lg-6 align-items-center d-flex">
                                <img src={FerrariSobre} alt="Ferrari" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="row imagens-sobre">
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <img src={Monza} class="img-fluid" alt="Vitória de Leclerc em Monza" title="Vitória de Charles Leclerc em Monza"/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <img src={VettelVictory} class="img-fluid" alt="Vettel e Leclerc" title="Primeira vitória de Vettel pela Ferrari"/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <img src={VettelLeclerc} class="img-fluid" alt="Vitória de Vettel" title="Charles Leclerc e Sebastian Vettel"/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                        <img src={CharlesVictory} class="img-fluid" alt="Vitória de Charles" title="Vitória de Charles Leclerc"/>
                    </div>
               </div>
            </div>
        </>
    );
}

export default Sobre;
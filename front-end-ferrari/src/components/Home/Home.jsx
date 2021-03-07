import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../Home/style.css";
import Carro from "../../assets/img/Ferrari-F1-2021-car.jpg";
import CharlesLeclerc from "../../assets/img/Charles-Leclerc.jpg";
import CarlosSainz from "../../assets/img/Carlos-Sainz.jpg";
class Home extends Component {
render(){
return(
<>
<div className="container-fluid">
   <div className="row">
      <div className="col">
         <Carousel>
            <Carousel.Item interval={1000}>
               <img
                  className="d-block w-100"
                  src={Carro}
                  alt="First slide"
                  />
               <Carousel.Caption>
                  <h3>Ferrari diz ter concertado erros da temporada passada.</h3>
                  <p>Equipe aprendeu com os erros e vem confiante para próxima temporada.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
               <img
                  className="d-block w-100"
                  src={CharlesLeclerc}
                  alt="Second slide"
                  />
               <Carousel.Caption>
                  <h3>Charles Leclerc se diz confiante para nova temporada.</h3>
                  <p>Piloto monegasco acredita nas melhorias feitas no carro e quer brigar por pódios.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src={CarlosSainz}
                  alt="Third slide"
                  />
               <Carousel.Caption>
                  <h3>Carloz Sainz faz primeiro treino da temporada.</h3>
                  <p>Piloto espanhol se diz animado para estreiar com a nova equipe.</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </div>
   </div>
  {/* INÍCIO BANENER. */}
   <div className="row">
      <div className="col-md-12 mt-4">
         <div className="jumbotron bg-cover text-white">
            <div className="container">
               <h1 className="display-4">A Potência e o Luxo do Cavalo</h1>
               <p className="lead">Todo o Luxo e Conforto da Ferrari aliado a performance nas pistas.</p>
               <p>Ferrari, uma história sem igual.</p>
               <a className="btn btn-light btn-lg" href="https://www.ferrari.com/en-EN/formula1" role="button">Saiba Mais</a>
            </div>
         </div>
      </div>
   </div>
   {/* INÍCIO FIM. */}

   {/* INÍCIO GALERIA DE FOTOS. */}
   <div className="row">
      <div className="col">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail" 
                     data-image="https://i.pinimg.com/originals/d3/66/d0/d366d0a829adb624a1cddbbab7c90fe1.jpg"
                     title="Carro Ferrari"
                   >
                  <img className="img-thumbnail"
                     src="https://i.pinimg.com/originals/d3/66/d0/d366d0a829adb624a1cddbbab7c90fe1.jpg"
                     alt="Carro Ferrari"/>
                  </a>
               </div>
               <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail" 
                     data-image="https://i.pinimg.com/originals/ad/e1/17/ade117b45e97ea63752fdfff9b18b8d0.jpg"
                     title="Vettel em sua última corrida pela Ferrari">
                  <img class="img-thumbnail"
                     src="https://i.pinimg.com/originals/ad/e1/17/ade117b45e97ea63752fdfff9b18b8d0.jpg"
                     alt="Vettel em sua última corrida pela Ferrari"/>
                  </a>
               </div>
               <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail"
                     title="Charles Leclerc"
                     data-image="https://i.pinimg.com/564x/4c/50/f4/4c50f49eae8932a95b19d567fc5dbe87.jpg"
                  >
                  <img className="img-thumbnail"
                     src="https://i.pinimg.com/564x/4c/50/f4/4c50f49eae8932a95b19d567fc5dbe87.jpg"
                     alt="Charles Leclerc"/>
                  </a>
               </div>
               <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail" 
                     title="Visão do piloto em um carro de F1"
                     data-image="https://pbs.twimg.com/media/DTgieYFW4AAE3PO?format=jpg&name=large"
                  >
                  <img className="img-thumbnail"
                     src="https://pbs.twimg.com/media/DTgieYFW4AAE3PO?format=jpg&name=large"
                     alt="Visão do piloto em um carro de F1"/>
                  </a>
               </div>
               <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail" 
                     data-image="https://e0.365dm.com/20/09/768x432/skysports-charles-leclerc-f1_5092980.jpg?20200911110632"
                     title="Ferrari no aniversário de 100 GP's"
                  >
                  <img className="img-thumbnail"
                     src="https://e0.365dm.com/20/09/768x432/skysports-charles-leclerc-f1_5092980.jpg?20200911110632"
                     alt="Ferrari no aniversário de 100 GP's"/>
                  </a>
               </div>
               <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail"  
                     data-image="https://cdn.motorlat.com/administrator/uploads/18565_motorlat-f1-mattia-binotto-believes-charles-leclerc-can-challenge-lewis-hamilton-v52.jpg"
                     title="Ferrari Line Up de Pilotos para 2021"   
                  >
                  <img className="img-thumbnail"
                     src="https://cdn.motorlat.com/administrator/uploads/18565_motorlat-f1-mattia-binotto-believes-charles-leclerc-can-challenge-lewis-hamilton-v52.jpg"
                     alt="Ferrari Line Up de Pilotos para 2021"/>
                  </a>
               </div>
               <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail"
                     data-image="https://i1.wp.com/racemotor.com.br/wp-content/uploads/2021/01/Sainz_Ferrari_Fiorano.jpg?fit=1024%2C623&ssl=1"
                     title="Carlos Sainz em seu primeiro teste como piloto da Ferrari"
                  >
                  <img className="img-thumbnail"
                     src="https://i1.wp.com/racemotor.com.br/wp-content/uploads/2021/01/Sainz_Ferrari_Fiorano.jpg?fit=1024%2C623&ssl=1"
                     alt="Carlos Sainz em seu primeiro teste como piloto da Ferrari"/>
                  </a>
               </div>
               <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                  <a className="thumbnail" 
                     data-image="https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/01/29121810/PA-57763148-1.jpg"
                     title="Carlos Sainz cumprimentando fãs"
                  >
                  <img className="img-thumbnail"
                     src="https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2021/01/29121810/PA-57763148-1.jpg"
                     alt="Carlos Sainz cumprimentando fãs"/>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* FIM GALERIA DE FOTOS. */}
</div>
</>
)
}
}
export default Home;


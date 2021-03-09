import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import MattiaTeamPrincipal from "../../assets/img/Mattia-Binotto-team-photo.jpg";
import CharlesLeclercDriver from "../../assets/img/Charles-Lecler-Driver.jpg";
import CarlosSainzDriver from "../../assets/img/Carlos-Sainz-Piloto.jpg";
function Pilotos(){
    return(
        <>
            <div className="container-fluid">
                <div classNames="row">
                    <div className="col"> 
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src={MattiaTeamPrincipal} />
                                <Card.Body>
                                <Card.Title>Mattia Binotto - Chefe de Equipe</Card.Title>
                                <Card.Text>
                                <p> Ele se juntou a Scuderia Ferrari em 1995, originalmente como engenheiro de testes, 
                                e então desempenhou um papel similar na equipe de 1997 a 2003. 
                                Depois de um período como engenheiro-chefe, ele se tornou chefe de motor e KERS em 2009, 
                                antes de se juntar à diretoria de operações da unidade de potência no final de 2014, 
                                desempenhando um papel fundamental na recuperação do desempenho com seu motor turbo híbrido V6.</p>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Última Atualização 3 min atrás</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={CharlesLeclercDriver} />
                                <Card.Body>
                                <Card.Title>Charles Leclerc - Piloto</Card.Title>
                                <Card.Text>
                                <p>Em 11 de setembro de 2018 a Scuderia Ferrari o anunciou como piloto titular partir de 2019, 
                                substituindo Kimi Räikkönen.                                
                                Na segunda prova da temporada 2019 no Barém obteve a pole position, 
                                tornando-se o mais jovem da equipe Ferrari - superando a Jacky Ickx, 
                                e segundo da categoria, atrás de seu atual companheiro Sebastian Vettel.</p>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Última Atualização 5 min atrás</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={CarlosSainzDriver} />
                                <Card.Body>
                                <Card.Title>Carlos Sainz - Piloto</Card.Title>
                                <Card.Text>
                                <p> Sainz entra na McLaren para substituir Alonso.
                                Sua primeira corrida na McLaren foi curta e nada boa, 
                                já que teve que se retirar após problema no motor Renault, 
                                onde seu carro teve um princípio de incêndio, 
                                logo apagado pelos fiscais de pista.
                                Em 14 de maio de 2020, 
                                a Scuderia Ferrari anunciou que Sainz irá competir pela equipe a partir da temporada de 2021, 
                                ao lado de Charles Leclerc. 
                                Sainz assinou um contrato de dois anos com a equipe italiana.
                                </p>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Última Atualização 15 min atrás</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>  
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pilotos;
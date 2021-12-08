import React from 'react';
import {Col, Row, Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import GraphiqueConsomation from '../components/GraphiqueConsomation.js';
import imgGraph from '../img/imgGraph.png'


const Consomation = () => {
    return (
        <div className="consomation">
            <Navigation />
            <Row lg md xs ="4" className="sectionPrincipal"><h1 className="titrePrincipal">Consomation</h1></Row>
            <Container>
                <Row lg md xs ="4" className="titre">
                    <Col xs md lg="1">
                        <img src={imgGraph} alt="imgTemp" className="imgTemp"/>
                    </Col>
                    <Col xs md lg="11">
                        <p>Graphique de consomation d'électricité</p>
                    </Col>
                </Row>
                <Row className="graphique">
                    <GraphiqueConsomation />
                </Row>
            </Container>
            <Footer />


        </div>);
}
export default Consomation;
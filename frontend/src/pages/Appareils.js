import React from 'react';
import {Row,Col, Container} from 'react-bootstrap';
import AfficheEcran from '../affichage/AfficheEcran';
import AfficheLight from '../affichage/AfficheLight';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const Appareils =() =>{

    let ledPlafondTV = <AfficheLight id="36157f90-bf5a-45f0-9f28-b044d6326384" name="Leds Plafond Télé"/>
    let ledCuisine = <AfficheLight idAfficheLight id="aa2c3ed9-ad8b-4f6b-87a4-74393b2c4f6c" name="Leds Cuisine"/>
    let ledPlafondCanap = <AfficheLight id="9f238719-c22e-40b7-908d-7bde8bfda8e3" name="Leds Plafond Bureau"/>
    let ledSalleDeBain = <AfficheLight id="1aebb681-ef85-4d11-9e81-de61498e9e9e" name="Leds Salle de Bain"/>
    
    let lampeCuisine = <AfficheLight idAfficheLight id="457c6d70-97d9-4a25-8b1b-f6d9e6aea0f4" name="Lampe Cuisine"/>
    let lampeSalon = <AfficheLight id="fad1df90-8669-4239-8a86-153fc69e7383" name="Lampe Salon"/>
    let ledBureau = <AfficheLight id="8dc8da88-d94d-4339-9504-f1cf515389aa" name="Leds Bureau"/>
    let ledTele = <AfficheLight id="b16779c7-4ae8-436b-abd2-5b83141379f9" name="Leds Télé"/>

    let ledLit = <AfficheLight idAfficheLight id="b84bf547-5cf3-48c6-bb6d-e23b0a2c9e6f" name="Leds Lit"/>
    let lampeEtage = <AfficheLight id="33f9fefb-272a-496c-894c-b0b6effe10f6" name="Lampe de l'étagère"/>

    let TVSalon = <AfficheEcran id="d10b5f1a-0f7d-d07a-80ea-6eb93d67240d" name="TV Samsung 7 Series"/>
    let ProjecteurSB = <AfficheEcran id="a37f7d4c-016a-45cb-9bac-222ca452afdf" name="Projecteur Samsung 8 Series"/>
    let EcranCuisine = <AfficheEcran id="b9ce41bb-5e87-45ad-b82e-ff0ab862889b" name="Ecran AOC 25 Series"/>

    return (
        <div className="Appareils">
            <Navigation />
            <Row lg md xs ="4" className="sectionPrincipal"><h1 className="titrePrincipal">Appareils</h1></Row>
            <Container>
                <Row lg md xs ="4">
                    <Col xs ="12" md lg="6">
                        {TVSalon}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {ledPlafondTV}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {ledCuisine}
                    </Col>
                </Row>
                <Row lg md xs ="1">
                    <Col xs ="12" md lg="6">
                        {ProjecteurSB}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {ledPlafondCanap}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {ledSalleDeBain}
                    </Col>
                </Row>
                
                <Row lg md xs ="1">
                    <Col xs ="12" md lg="6">
                        {EcranCuisine}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {lampeEtage}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {ledLit}
                    </Col>
                </Row>
                <Row lg md xs ="1">
                    <Col xs ="12" md lg="3">
                        {lampeCuisine}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {lampeSalon}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {ledBureau}
                    </Col>
                    <Col xs ="12" md lg="3">
                        {ledTele}
                    </Col>
                </Row>
            </Container>
            <Footer/>
            
        </div>);
}
export default Appareils;
import React from 'react';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import WidgetAppareilsLong from './WidgetAppareilsLong';
import AfficheLight from '../affichage/AfficheLight.js';

import AfficheEcran from '../affichage/AfficheEcran.js';

const SectionAppareils = () => {
    let ledPlafondTV = <AfficheLight id="36157f90-bf5a-45f0-9f28-b044d6326384" name="Leds Plafond Télé"/>
    let ledCuisine = <AfficheLight idAfficheLight id="aa2c3ed9-ad8b-4f6b-87a4-74393b2c4f6c" name="Leds Cuisine"/>
    let ledPlafondCanap = <AfficheLight id="9f238719-c22e-40b7-908d-7bde8bfda8e3" name="Leds Plafond Bureau"/>
    let ledSalleDeBain = <AfficheLight id="1aebb681-ef85-4d11-9e81-de61498e9e9e" name="Leds Salle de Bain"/>

    let TVSalon = <AfficheEcran id="d10b5f1a-0f7d-d07a-80ea-6eb93d67240d" name="TV Samsung 7 Series"/>
    let ProjecteurSB = <AfficheEcran id="a37f7d4c-016a-45cb-9bac-222ca452afdf" name="Projecteur Samsung 8 Series"/>

    return (
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
        </Container>
    );
};

export default SectionAppareils;
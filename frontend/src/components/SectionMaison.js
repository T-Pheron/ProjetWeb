import React from 'react';
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import AfficheMeteo from '../affichage/AfficheMeteo.js';
import AffichageSecurite from '../affichage/AfficheSecurite.js';

let meteo = <AfficheMeteo/>;
let securite = <AffichageSecurite/>;

const SectionMaison = () => {
    return (
        <Container>
            <Row lg md xs ="4" className="widget">
                <Col xs ="12" md lg="4">
                    {securite}
                </Col>
                <Col xs ="12" md lg="8">
                   {meteo}
                </Col>
            </Row>
        </Container>
    );
};

export default SectionMaison;
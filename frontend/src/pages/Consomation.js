import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import GraphiqueConsomation from '../components/GraphiqueConsomation.js';


const Consomation = () => {
    return (
        <div className="consomation">
            <Navigation />
            <Row lg md xs ="4" className="sectionPrincipal"><h1 className="titrePrincipal">Consomation</h1></Row>
            <Container>
                <GraphiqueConsomation />
            </Container>
            <Footer />


        </div>);
}
export default Consomation;
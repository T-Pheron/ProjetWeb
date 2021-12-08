import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import AffichageAdmin from '../affichage/AffichageAdmin';

let admin = < AffichageAdmin />

const Admin = () => {
    return (
        <div className="consomation">
            <Navigation />
            <Row lg md xs="4" className="sectionPrincipal"><h1 className="titrePrincipal">Admin</h1></Row>
            <Container>
                {admin}
            </Container>
            <Footer />


        </div>);
}
export default Admin;
import React from 'react';
import {Row, Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionMaison from '../components/SectionMaison';
import SectionAppareils from '../components/SectionAppareils';
import SectionScene from '../components/SectionScene';


const Appareils =() =>{
    return (
        <div className="Appareils">
            <Navigation />
            <Row lg md xs ="4" className="sectionPrincipal"><h1 className="titrePrincipal">Appareils</h1></Row>
            <Container>
                <Row lg md xs ="4" className="titre">Maison</Row>
                <SectionMaison/>
                <Row lg md xs ="4" className="titre">Favoris</Row>
                <SectionAppareils/>
                <Row lg md xs ="4" className="titre">Scènes</Row>
                <SectionScene/>
            </Container>
            <Footer/>
            
        </div>);
}
export default Appareils;
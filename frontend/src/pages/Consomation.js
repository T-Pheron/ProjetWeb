import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import App from '../components/Script.js';


const Consomation = () => {
    return (
        <div className="consomation">
            <Navigation />
            <Container>
                <App />
            </Container>
            <Footer />


        </div>);
}
export default Consomation;
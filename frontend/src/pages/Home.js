import React from 'react';
import {Row, Col,  Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionMaison from '../components/SectionMaison';
import SectionAppareils from '../components/SectionAppareils';
import SectionTemperature from '../components/SectionTemperature';
import SectionScene from '../components/SectionScene';
import imgTemp from '../img/temperature.png';
import imgHome from '../img/imgHome.png';
import imgScene from '../img/imgScene.png';
import imgFav from '../img/imgFav.png';


const Home =() =>{
    return (
        <div className="home">
            <Navigation />
            <Container>
                <Row lg md xs ="4" className="titre">
                    <Col xs md lg="1">
                        <img src={imgHome} alt="imgTemp" className="imgTemp"/>
                    </Col>
                    <Col xs md lg="11">
                        <p>Maison</p>
                    </Col>
                </Row>
                <SectionMaison/>
                <Row lg md xs ="4" className="titre">
                    <Col xs md lg="1">
                        <img src={imgTemp} alt="imgTemp" className="imgTemp"/>
                    </Col>
                    <Col xs md lg="11">
                        <p>Température</p>
                    </Col>
                </Row>
                <SectionTemperature/>
                <Row lg md xs ="4" className="titre">
                    <Col xs md lg="1">
                        <img src={imgFav} alt="imgTemp" className="imgTemp"/>
                    </Col>
                    <Col xs md lg="11">
                        <p>Favoris</p>
                    </Col>
                </Row>
                <SectionAppareils/>
                <Row lg md xs ="4" className="titre">
                    <Col xs md lg="1">
                        <img src={imgScene} alt="imgTemp" className="imgTemp"/>
                    </Col>
                    <Col xs md lg="11">
                        <p>Scènes</p>
                    </Col>
                </Row>
                <SectionScene/>
            </Container>
            <Footer/>

            
            
        </div>);
}
export default Home;
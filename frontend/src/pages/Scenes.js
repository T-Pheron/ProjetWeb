import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import AfficheScene from '../affichage/AfficheScene';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

let sceneBonjour = <AfficheScene id="bbefac96-c764-4ab7-b246-1335580c6ebe" name="Bonjour" number="1"/>
let sceneCine = <AfficheScene id="d13fa28e-8194-4288-95fe-57b1377d6539" name="Cinéma" number="8"/>
let sceneFilm = <AfficheScene id="48a5d487-fdf7-4af9-a7eb-21d3e0c01a0e" name="Film" number="8"/>

let sceneModeNuit = <AfficheScene id="960755c1-f7dd-4bf2-a894-48484019f6c5" name="Mode nuit" number="6"/>
let sceneDormir = <AfficheScene id="44be8e15-5448-4591-8c4b-deafa969dab8" name="Dormir" number="6"/>
let sceneSoiree = <AfficheScene id="d9849a74-c757-4f81-ab9d-3d3cdee04bbd" name="Soirée" number="5"/>

let sceneRentrer = <AfficheScene id="d3ebf150-9148-43b2-a15e-81706346460a" name="Rentrer à la maison" number="3"/>
let sceneSortir = <AfficheScene id="97fb6f35-e9c5-4773-a746-fd78a591e849" name="Partir de la maison" number="4"/>
let sceneTravail = <AfficheScene id="9396b75a-737d-439d-abad-12aac81b49d7" name="Travail" number="9"/>

let sceneGaming = <AfficheScene id="c7c7e5bb-5f53-4e54-a6ed-758ec8c80c4a" name="Gaming" number="5"/>
let sceneCuisine = <AfficheScene id="7b25fcfd-67f6-4fcc-9397-301b4fb5cb0b" name="Cuisine" number="5"/>
let sceneManger = <AfficheScene id="2b2be8ae-e237-44bf-bdbd-36cf34c808b7" name="Manger Film" number="5"/>

let sceneAllS = <AfficheScene id="4e10ec04-f5f1-4696-8cdb-d0184c180afb" name="Allumage Sallon" number="1"/>
let sceneAllC = <AfficheScene id="3ecbe6f6-5a6e-4049-b95d-2bd29db79476" name="Allumage Cuisine" number="1"/>
let sceneAllSl = <AfficheScene id="26191e7c-e006-4cc1-b1c5-c9559ec069fc" name="Allumage Salle de bain" number="1"/>

let sceneEtS = <AfficheScene id="76d7803e-ca0d-48c1-a6fc-010f114e3c5a" name="Éteindre Salon" number="2"/>
let sceneEtC = <AfficheScene id="df2449ff-6aa4-452f-886e-82bf26ead64b" name="Éteindre Cuisine" number="2"/>
let sceneEtSl = <AfficheScene id="ec003f40-c363-483a-b304-dd486975039c" name="Éteindre Salle de bain" number="2"/>


const Scenes =() =>{
    return (
        <div className="scenes">
            <Navigation />
            <Row lg md xs ="4" className="sectionPrincipal"><h1 className="titrePrincipal">Scènes</h1></Row>
            <Container>
                <Row lg md xs ="4">
                    <Col xs ="12" md lg="4">
                        {sceneBonjour}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneCine}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneFilm}
                    </Col>
                </Row>
                <Row lg md xs ="1">
                    <Col xs ="12" md lg="4">
                        {sceneSoiree}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneModeNuit}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneDormir}
                    </Col>
                </Row>
                <Row lg md xs ="1">
                    <Col xs ="12" md lg="4">
                        {sceneRentrer}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneSortir}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneTravail}
                    </Col>
                </Row>
                <Row lg md xs ="1">
                    <Col xs ="12" md lg="4">
                        {sceneGaming}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneCuisine}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneManger}
                    </Col>
                </Row>
                <Row lg md xs ="1">
                    <Col xs ="12" md lg="4">
                        {sceneAllS}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneAllC}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneAllSl}
                    </Col>
                </Row>
                <Row lg md xs ="1">
                    <Col xs ="12" md lg="4">
                        {sceneEtS}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneEtC}
                    </Col>
                    <Col xs ="12" md lg="4">
                        {sceneEtSl}
                    </Col>
                </Row>
            </Container>
            <Footer/>
            
        </div>);
}
export default Scenes;
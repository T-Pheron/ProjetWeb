import React from 'react';
import axios from 'axios';
import "../index.js";
import {Row, Col} from 'react-bootstrap';


import imgSeOn from '../img/imgSeOn.png';
import imgSeOff from '../img/imgSeOff.png';


function attribueImg(etat){
    switch(etat){
        case "on":
            return (imgSeOff);
        case 'off':
            return (imgSeOn);
    }
}


export default class AfficheSecurite extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            etat : "off",
            text :"Surveillance désactivé",
        }
    }
 

    componentsDiMount() {
        var config = {
            method: 'get',
            url: 'https://api.smartthings.com/v1/devices/f85757c6-a6f6-450e-bdc1-b45ae489c16f/components/main/capabilities/switch/status',
            headers: { 
                'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
            }
        };

        axios(config)
        .then(response => {
            this.setState(state => (
                {
                    etat : response.data.switch.value,
                }
            ));
        });
    }

    render() {
        this.componentsDiMount();
        var imgT = attribueImg(this.state.etat);
        if (this.state.etat==="on"){
            this.state.text="Surveillance désactivé";
        }
        else{
            this.state.text="Surveillance activé";
        }


        return(
            
            <div className="widgetecurite">
                <Row className="titreSecurite">
                    <p>Mode de sécurité</p>
                </Row>
                <Row>
                    <Col xs="12" md lg="6" className="textSecurite">
                        <p>{this.state.text}</p>
                    </Col>
                    <Col xs="12" md lg="6" className="textSecurite">
                        <img src = {imgT} alt="All" className="imgSecurite"/>
                    </Col>
                </Row>
            </div>
            
        )
    }
}
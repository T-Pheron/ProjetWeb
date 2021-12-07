import React from 'react';
import "../index.js";
import {Row, Col} from 'react-bootstrap';


import img01d from '../img/weather/01d.png';
import img02d from '../img/weather/02d.png';
import img03d from '../img/weather/03d.png';


function attribueImg(icon){
    switch(icon){
        case "01d":
            return (img01d);
        case '02d':
            return (img02d);
        case '03d':
            return (img03d);
    }
}


export default class AfficheMeteo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            etat : "off",
            icon :"",
        }
    }
 

    componentsDiMount(){
        var axios = require('axios');
        
        if (this.state.count === 0){
            var config = {
                method: 'get',
                url: 'https://api.openweathermap.org/data/2.5/weather?q=paris&appid=7aaf950120abf6c822a790579def95f1&lang=fr',
                headers: { }
              };
            
            axios(config)
            .then(response => {
                this.setState(state => (
                    {
                        icon : response.data.weather[0].icon,
                        temp: response.data.main.temp,
                        feels_like: response.data.main.temp,
                        temp_min: response.data.main.temp_min,
                        temp_max: response.data.main.temp_max,
                        speed: response.data.wind.speed,
                    }
                ));
            });

            this.state.count=1;
        }
    }

    render() {
        this.componentsDiMount();
        var imgT = attribueImg(this.state.icon);

        

        return(
            
            <div className="widgetMeteo">
                <Row>
                    <Col xs="6" md lg="3" className="meteoImg">
                        <img src = {imgT} alt="Play"/>
                    </Col>
                    <Col xs="6" md lg="3" className="meteoTemp">
                        <Row className="temperature">
                            <Col xs md lg="6" className="temp">{Math.round(this.state.temp - 273.15)}</Col>
                            <Col xs md lg="6" className="unitT"><p>°C</p></Col>
                        </Row>
                        <Row className="ville">
                            <p>Paris</p>
                        </Row>
                    </Col>
                    <Col xs="12" md lg="6" className="meteoTempH">
                        <Row>
                            <Col xs md lg="6" className="titreDetail"><p>Ressentie: </p></Col>
                            <Col xs md lg="3" className="infos"><p>{Math.round(this.state.feels_like - 273.15)}</p></Col>
                            <Col xs md lg="3" className="unit"><p>°C</p></Col>
                        </Row>
                        <Row>
                            <Col xs md lg="6" className="titreDetail"><p>Température max:</p></Col>
                            <Col xs md lg="3" className="infos"><p>{Math.round(this.state.temp_max- 273.15)}</p></Col>
                            <Col xs md lg="3" className="unit"><p>°C</p></Col>
                        </Row>
                        <Row>
                            <Col xs md lg="6" className="titreDetail"><p>Température min:</p></Col>
                            <Col xs md lg="3" className="infos"><p>{Math.round(this.state.temp_min- 273.15)}</p></Col>
                            <Col xs md lg="3" className="unit"><p>°C</p></Col>
                        </Row>
                        <Row>
                            <Col xs md lg="6" className="titreDetail"><p>Vitesse vent: </p></Col>
                            <Col xs md lg="3" className="infos"><p>{Math.round(this.state.speed * 3.6)}</p></Col>
                            <Col xs md lg="3" className="unit"><p>km/h</p></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            
        )
    }
}
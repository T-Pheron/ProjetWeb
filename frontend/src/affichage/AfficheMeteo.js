import React from 'react';
import "../index.js";
import {Row, Col} from 'react-bootstrap';


import img01d from '../img/weather/01d.png';
import img02d from '../img/weather/02d.png';
import img03d from '../img/weather/03d.png';
import img04d from '../img/weather/04d.png';
import img09d from '../img/weather/09d.png';
import img10d from '../img/weather/10d.png';
import img11d from '../img/weather/11d.png';
import img13d from '../img/weather/13d.png';
import img50d from '../img/weather/50d.png';

import img01n from '../img/weather/01n.png';
import img02n from '../img/weather/02n.png';
import img03n from '../img/weather/03n.png';
import img04n from '../img/weather/04n.png';
import img09n from '../img/weather/09n.png';
import img10n from '../img/weather/10n.png';
import img11n from '../img/weather/11n.png';
import img13n from '../img/weather/13n.png';
import img50n from '../img/weather/50n.png';


function attribueImg(icon){
    switch(icon){
        case "01d":
            return (img01d);
        case '02d':
            return (img02d);
        case '03d':
            return (img03d);
        case '04d':
            return (img04d);
        case '09d':
            return (img09d);
        case '10d':
            return (img10d);
        case '11d':
            return (img11d);
        case '13d':
            return (img13d);
        case "50d":
            return (img50d);
        case '01n':
            return (img01n);
        case '02n':
            return (img02n);
        case '03n':
            return (img03n);
        case '04n':
            return (img04n);
        case '09n':
            return (img09n);
        case '10n':
            return (img10n);
        case '11n':
            return (img11n);
        case '13n':
            return (img13n);
        case '50n':
            return (img50n);
    }
}


export default class AfficheMeteo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            description : "",
            icon : "",
            temp: 0,
            tempH: 0,
            temp_min: 0,
            temp_max: 0,
            speed: 0,
            count: 0,
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
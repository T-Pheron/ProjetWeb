import React from 'react';
import "../index.js";
import { Row, Col} from 'react-bootstrap';
import imgMAllumer from '../img/imgMAllumer.png';
import imgMEteind from '../img/imgMEteind.png';
import imgRentrer from '../img/imgRentrer.png';
import imgSortie from '../img/imgSortie.png';
import imgSoiree from '../img/imgSoiree.png';
import imgDormir from '../img/imgDormir.png';
import imgSoleil from '../img/imgSoleil.png';
import imgCinema from '../img/imgCinema.png';
import imgCafe from '../img/imgCafe.png';
import imgPlay from '../img/play.png';

function attribueImg(number){
    switch(number){
        case "1":
            return (imgMAllumer);
        case "2":
            return (imgMEteind);
        case "3":
            return (imgRentrer);
        case "4":
            return (imgSortie);
        case "5":
            return (imgSoiree);
        case "6":
            return (imgDormir);
        case "7":
            return (imgSoleil);
        case "8":
            return (imgCinema);
        case "9":
            return (imgCafe);
    }
}
export default class AfficheScene extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            idScene : props.id,
            img : attribueImg(props.number),
        }
        this.handleClick = this.handleClick.bind(this);
    }
 

    handleClick(){
        var axios = require('axios');

        var config = {
          method: 'post',
          url: 'https://api.smartthings.com/v1/scenes/'+ this.state.idScene +'/execute',
          headers: { 
            'Authorization': 'Bearer 41f76958-9ad9-4291-85b0-dd741c65794a'
          }
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {

        return(
            
            <div className="widgetscene">
                <Row>
                    <Col xs md="4" lg="3" className="sceneImg">
                        <img src = {this.state.img} alt="SceneImg"/>
                    </Col>
                    <Col xs md="4" lg="6" className="sceneName">
                        <p>{this.state.name}</p>
                    </Col>
                    <Col xs md="4" lg="3" className="sceneButon">
                        <button className="boutonLight" onClick={this.handleClick}><img src = {imgPlay} alt="Play"/></button>
                    </Col>
                </Row>
            </div>
            
        )
    }
}
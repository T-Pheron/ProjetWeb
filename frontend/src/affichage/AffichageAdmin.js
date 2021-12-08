import React from "react";
import "../index.js";
import axios from "axios";
import {Row, Container, Col} from 'react-bootstrap';

export default class AffichageAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            value: "",
            date: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);

    }

    handleClick() {
        var axios = require('axios');
        var data = JSON.stringify({
            "value": this.state.value,
            "unit": "kWh",
            "date": this.state.date,
        });

        var config = {
            method: 'post',
            url: 'http://localhost:3001/enedis',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChangeValue(event) {
        this.setState({ value: event.target.value })
    }

    handleChangeDate(event) {
        this.setState({ date: event.target.value })
    }




    render() {

        return (
            <Container>
                <div className="divAdmin">
                    <p>Cette page vous permez de rajouter les informations de consomation électrique à la base de donné de l'appartement</p>
                    <Row>
                        <Col className="remplisageAdmin">
                            <input type="number" placeholder="Valeur" onChange={event => this.handleChangeValue(event)} />
                        </Col>
                        <Col className="remplisageAdmin">
                            <input type="text" placeholder="Date jj/mm/aa" onChange={event => this.handleChangeDate(event)} />
                        </Col>
                    </Row>
                    <Row className="buttonAdmin">
                        <button onClick={this.handleClick}>Valider</button>
                    </Row>
                </div>
            </Container>
        )
    }
}
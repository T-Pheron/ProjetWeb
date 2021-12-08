import React from "react";
import "../index.js";
import axios from "axios";

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
            <div className="flights">
                <span className="itemsTitle">Admin</span>
                <div className="flightomponent">
                    <input type="number" placeholder="La consomation" onChange={event => this.handleChangeValue(event)} />
                    <input type="text" placeholder="La date" onChange={event => this.handleChangeDate(event)} />
                    <button onClick={this.handleClick}>Valider</button>
                </div>
            </div>
        )
    }
}
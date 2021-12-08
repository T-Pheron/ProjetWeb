import React from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import {Container } from 'react-bootstrap';

export default class GraphiqueConsomation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            url: 'http://localhost:3001/enedis'

        }
    }

    componentsDiMount() {
        var config = {
            method: 'get',
            url: this.state.url,
            headers: {}
        };
        axios(config)
            .then(res => {
                this.setState(state => (
                    {
                        data: res.data
                    }
                ));
            });
    }

    render() {

        this.componentsDiMount();
        return (
            <Container>
                <LineChart
                    width={1200}
                    height={500}
                    data={this.state.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                </LineChart>
            </Container>
            
        );
    }
}

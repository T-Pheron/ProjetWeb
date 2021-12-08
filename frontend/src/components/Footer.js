import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const Footer = () => {
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Text>
                    <p>
                        ©HomeApp|2021
                    </p>
                    
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Footer;
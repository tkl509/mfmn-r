import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function RenderHorse({horse}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={horse.image} alt={horse.name} />
                <CardBody>
                    <CardText>{horse.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function HorseInfo(props) {
    if(props.horse) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{props.horse.name}</h2>
                        <hr />
                    </div>
                </div>
       
                <div className="row">
                    <RenderHorse horse={props.horse} />
                </div>
            </div>
       
            );
        }

        return(
            <div />
        );
    }

export default HorseInfo;
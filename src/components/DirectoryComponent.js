import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({horse}) {
    return (
        <Card>
            <Link to={`/directory/${horse.id}`}>
                <CardImg width="100%" src={horse.image} alt={horse.name} />
                        <CardTitle>{horse.name}</CardTitle>
            </Link>
        </Card>
            );
    }

function Directory(props) {
    const directory = props.horses.map(horse => {
        return(
            <div key={horse.id} className="col-md-5 m-1">
                <RenderDirectoryItem horse={horse} />
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Horses</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;
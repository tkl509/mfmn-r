import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

function About(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>Rescue verbiage.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-success text-white"><h3>Rescue At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">2011</dd>
                                <dt className="col-6">No. of horses since 2011</dt>
                                <dd className="col-6">500</dd>
                                <dt className="col-6">Volunteer hours in 2018</dt>
                                <dd className="col-6">> 7,000</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;
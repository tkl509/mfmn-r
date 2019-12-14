import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        Horse Way<br />
                        Linn Creek, MO
                    </address>
                </div>
                <div className="col contact-link">
                    <a role="button" className="btn btn-link" href="tel:+15735551234"><i className="fa fa-phone"></i> 1-573-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> info@mfmn.mmm</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
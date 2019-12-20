import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleDonate = this.handleDonate.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleDonate(event) {
        alert(`Firstname: ${this.firstName.value} Lastname: ${this.LastName.value} Remember: ${this.amount.value}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>MFMN</h1>
                                <h2>Horse Rescue & Santuary</h2>
                            </div>
                            <div className="col-md-4 col-xl-2">
                                <Button  color="warning" size="large" onClick={this.toggleModal}>Donate</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Make a Donation</ModalHeader>
                    <ModalBody>
						<Form onSubmit={this.handleDonate}>
                            <FormGroup>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input type="text" id="firstName" name="firstName"
                                    innerRef={input => this.firstName = input} />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input type="text" id="lastName" name="lastName"
                                    innerRef={input => this.lastName = input} />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="amount">Amount</Label>
                                <Input type="text" id="amount" name="amount"
                                    innerRef={input => this.amount = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="success">Donate</Button>
                      </Form>
                    </ModalBody>
                </Modal>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Horses
                                    </NavLink>
                                </NavItem>
                               <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
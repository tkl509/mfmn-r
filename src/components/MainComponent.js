import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import HorseInfo from './HorseInfoComponent';
import { HORSES } from '../shared/horses';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horses: HORSES,
        };
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                    horse={this.state.horses.filter(horse => horse.featured)[0]}
                />
            );
        }

        const HorseWithId = ({match}) => {
            return (
                <HorseInfo 
                    horse={this.state.horses.filter(horse => horse.id === +match.params.horseId)[0]}
                />
            );
        };

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory horses={this.state.horses} />} /> 
                    <Route path='/directory/:horseId' component={HorseWithId} />
                    <Route path='/aboutus' component={About} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch> 
                <Footer />
            </div>
        );
    }

}

export default Main;
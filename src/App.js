import React from 'react';

import 'react-bootstrap';
import 'react-materialize';

import { Switch, Route } from "react-router-dom";
import { Home } from './components/HomePage/Home.js';
import { HeroInfoPage } from "./components/HeroInfoPage/HeroInfoPage";

import './App.css';

function App() {
    return (
        <div className='page-container'>
            <div className='content'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/hero-info/:id" component={HeroInfoPage} />
                </Switch>
            </div>
        </div>
    );
}

export default App;

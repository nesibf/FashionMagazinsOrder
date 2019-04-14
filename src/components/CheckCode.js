import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes'
import Fish from './Fish';
import base from '../base';
import PropTypes from "prop-types";

class App extends React.Component {

    static propTypes = {
        match: PropTypes.object
    };

    state = {
        fishes: {},
        order: {}
    };
}


import React from 'react'
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import base, {firebaseApp} from "../base";

class Inventory extends React.Component {

    constructor() {
        super();
        this.state = {
            uid: null,
            owner: null
        };
    };
}

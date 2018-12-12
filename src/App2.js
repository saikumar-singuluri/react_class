import React, { Component } from 'react';
import Table from './component/tableComponent';
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Hello, React!",
            tHeader1: [],
            tBody1: [],
            tHeader2: [],
            tBody2: [],
            apiResponse: []
        }
        this.message = "welcome to react";
    }

    /**
     * state,
     * props,
     * life cycle,
     * parent and child combination
     * stateless component
     * statefull component
     * presentatinal component
     * container component
     * simple component
     * class component
     * 
     *  modularize the class component using simple component
     *  Passing the data parent to child
     *  used same component multiple place with different props values
     *  fatching api calls
     *  passing the data child to parent
     *  routings
     *  form with curd operations
     * 
    */
    componentWillMount() {
        let tHeader1 = ["Name", "Job"];
        let body1 = [{
            name: "Charlie",
            job: "Janitor"
        }, {
            name: "Mac",
            job: "Bouncer"
        }, {
            name: "Dee",
            job: "Aspiring actress"
        }, {
            name: "Dennis",
            job: "Bartender"
        }]
        let tHeader2 = ["S.no", "Name", "Job", "Role"];
        let tBody2 = [{
            index: 1,
            name: "Charlie",
            job: "Janitor",
            role: "manager"
        }, {
            index: 2,
            name: "Mac",
            job: "Bouncer",
            role: "senior manager"
        }, {
            index: 3,
            name: "Dee",
            job: "Aspiring actress",
            role: "manager"
        }, {
            index: 4,
            name: "Dennis",
            job: "Bartender",
            role: "manager"
        }];
        fetch('http://www.snagfilms.com/apis/films.json?limit=10')
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    tHeader1,
                    tBody1: body1,
                    tHeader2,
                    tBody2,
                    apiResponse: JSON.stringify(myJson)
                })
                console.log(JSON.stringify(myJson));
            });

    }
    cellClick = (value) => {
        console.log(value)
    }
    updateMsg = () => {
        // this.setState({
        //     msg : "Hi welcome to react"
        // });
        this.message = "Hi welcome to react";
    }
    render() {
        return (
            <div className="App">
                <h1>{this.state.msg}</h1>
                <h2>{this.message}</h2>
                <button onClick={this.updateMsg}>Click</button>
                <h3>student details</h3>
                <Table header={this.state.tHeader1} onCellClick={this.cellClick} body={this.state.tBody1} apiResponse={this.state.apiResponse} />
                <Table header={this.state.tHeader2} onCellClick={this.cellClick} body={this.state.tBody2} />
            </div>
        );
    }
}

export default App;
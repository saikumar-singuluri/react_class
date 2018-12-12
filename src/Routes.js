import React, {Component} from 'react';
import Login from './component/Login';
import Home from './component/Home';
//import About from './component/About';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class RouteComponent extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                       <Route path="/" exact component={Login} />
                        <Route path="/Home" component={Home}/>
                        {/* <Route path="/About" component={About} /> */}
                    </div>
                </Router>

            </div>

        );
    }
}

export default RouteComponent;
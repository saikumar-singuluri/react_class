import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
    }
    redirectPage = () => {
        this.props.history.push('/Home');
    }
    render() {
        return (<div>
            <h1>Login Page</h1>
            <br/>
            <button onClick={this.redirectPage}>Home Page</button>
        </div>);
    }
}

export default Login;


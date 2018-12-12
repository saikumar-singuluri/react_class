import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber() {
    this.setState({ data: this.state.data + 1 })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name:"sai kumar",
        email:"saikumar@gmail.com",
        phone:"9790484210",
        address:"sdhf,vhjksdfjbsdfaskfh asfjaldfhgaslkdfhvlaksdf"
      },
      isAdmin:true
    }
    
  };
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
    this.setState({isAdmin:false});
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    //if(newState.isComponentUpdate == this.state.isComponentUpdate)
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
  render() {
    let {data} = this.state;
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
        <div>
          <h4>
            {data.name}
          </h4>
          <h4>
            {data.email}
          </h4>
          <h4>
            {data.phone}
          </h4>
          {this.state.isAdmin && <h4>
            {data.address}
          </h4>}
        </div>
      </div>
    );
  }
}

export default App;

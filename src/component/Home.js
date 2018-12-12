import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        const a = "mani";
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }
    handleChange = event => {
        const {name, value} = event.target;
    
        // this.setState({
        //     [name] : value
        // });
    }
    getValue = () => {
        console.log("*****NAME******"+this.state.name);
        console.log("******JOB*********"+this.state.job);
    }
    //abc = "asdagsdjhasd";
    // initialState = {
    //     name: 'mani',
    //     job: 'sdjjskdf'
    // }
    // get initialState(){
    //     return {
    //         name: 'mani',
    //         job: 'sdjjskdf'
    //     }
    // }
    // get value(){
    //     return "Sadasdf";
    // }
    render() {
        const { name, job } = this.state; 

        return (
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange}/>

                    <input 
                    type="button" 
                    value="submit" 
                    onClick={this.getValue}/>
            </form>
        );
    }
}

export default Home;
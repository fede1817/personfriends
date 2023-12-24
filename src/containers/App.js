import React, { Component } from "react";
import CardList from "../components/CardList";
import SeachBox from "../components/SearchBox";
import '../containers/App.css';
import Scroll from "../components/Scroll";

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then( users => {
           this.setState({ robots: users }); 
        })
        
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value});
    }
    render(){
        const filteredRobots = this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
     return(
        <div className="tc">
            <h1 className="f1">EMOJI FRIENDS</h1>
            <SeachBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
            
        </div>
        
    );   
    }
}

export default App;

import React from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import { useState,useEffect  } from "react";
import "./App.css";
import Scrool from "../components/Scrool";

function App () {
    const [state, setState] = useState({    
        robots: [],
        searchfield:""
    }); 

    
     function onSearchChange(event){
        setState({...state,
                searchfield: event.target.value,
            }
            )  
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((resp) => resp.json())
          .then((users) => {
            setState({ ...state, robots: users });
          });
      }, []);
    
const filteredRobots = state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(state.searchfield.toLowerCase());
});
    return(
        <div className="tc">
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scrool>
                <CardList robots={filteredRobots}/>
            </Scrool>
        </div>
    );
}

export default App;
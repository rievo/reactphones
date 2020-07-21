import React from 'react';
import axios from 'axios';

import './App.css';

import ListComponent from './listComponent/listComponent'
import DetailsC from './detailsComponent/detailsC'


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      phones : [],
      inspected_phone:undefined
    }
  }

  render(){
    return (
      <div className="App">
        <ListComponent dataFromParent={this.state.phones} onRowSelected={(event) => (this.onRowSelected(event))}></ListComponent>
        <DetailsC dataFromParent={this.state.inspected_phone}></DetailsC>
      </div>
    );
  }

  componentDidMount(){
    axios.get("http://localhost:8081/phones")
    .then(res =>{
      let data = res.data;
      this.setState({
        phones: data
      })
    })
  }

  onRowSelected(i){
    //console.log("APP", e)

    //Populate the detail view 

    let toInspect = this.state.phones[i]
    this.setState({
      inspected_phone:toInspect
    })

  }
}


export default App;

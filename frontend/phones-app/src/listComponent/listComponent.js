import React from 'react';

import './listComponent.css';


class ListComponent extends React.Component{
    constructor(){
        super()

        this.state = {
            selected_id : "-1"
        }
        
    }
    render(){

        let self = this;
        return <div id="details-list" className="grid-list">
         <ul>
            {this.props.dataFromParent.map(function(item, index){

                return <li className="item-list" onClick={(event)=> self.handleClick(event, index)} key={item.id}>{item.name}</li>
            })}
        </ul>
        </div>
        
        /*console.log("SSS")
        console.log(this.props.dataFromParent)
        return <h3>Phonename</h3>*/
    }

    handleClick(event, index){
        this.setState({
            selected_id: index
        })

        this.props.onRowSelected(index);
    }

    
}

export default ListComponent
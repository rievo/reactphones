import React from 'react';

import './detailsC.css';


class DetailsC extends React.Component{

    
    render(){


        let phone = this.props.dataFromParent
        

        if(phone == undefined){
            return <div>
                <p className="default-text">Select a model from the list</p>
            </div>
        }else{
            return <div className="details-group">
                <div className="detail-header">
                    <h4>{phone.name}</h4>
                </div>

                <div className="details-view">
                    
                    <div className="left-detail">
                        <img className="miniature" src={"http://localhost:8081/"+phone.imageFileName}></img>
                    </div>
                    <div className="right-detail">
                        <p>Manufacturer: <span> {phone.manufacturer}</span></p>
                        <p>Description: <span> {phone.description}</span></p>
                        <p>Price: <span> {phone.price} $</span></p>
                        <p>Screen: <span> {phone.screen}</span></p>
                        <p>Processor: <span> {phone.processor}</span></p>
                        <p>RAM: <span> {phone.ram}Gb</span></p>
                    </div>
                    
                </div>
            </div>
           
        }
        
        
    }
}

export default DetailsC
import React, { Component } from 'react'


function House(props){
    
    

return(
    <div>
        
        
        <div>Property Name: {props.name}</div>
        <div>Address: {props.address}</div>
        <div>City: {props.city}</div>
        <div>State: {props.state}</div>
        <div>Zip: {props.zip}</div>
        
        </div>
       

    
)
}

export default House;


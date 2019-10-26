import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from "../House/House";
import { isProperty } from '@babel/types';

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            properties: []
        }
    }

    componentDidMount(){
      this.getAllProperties()
           
      }

      getAllProperties(){
          axios.get('/api/properties')
          .then(response => {
              this.setState({
                  properties: response.data
              })
          })
          .catch(err => console.log(err));
      }
       
    render(){
        const { properties } = this.state
        let propertyList = properties.map(house=>{
            return(<House
            id={house.id}
            name={house.name}
            address={house.address}
            city={house.city}
            state={house.state}
            zip={house.zip}
            />)
        })
        return(
            <div className="dashboard">
            
            <div className="dashboard-title">Dashboard</div>
            
           
            <div >
                <div >Home Listings</div>
                <div className="listings">
                    {propertyList}
                </div>
            </div>
            </div>
        )
    }
}

export default Dashboard
    

            
           
        



  

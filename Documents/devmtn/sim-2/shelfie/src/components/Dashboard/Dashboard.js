import React, { Component } from 'react';
import axios from 'axios';

import Product from '../Product/Product';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventoryList: []
        }

        this.getProducts = this.getProducts.bind(this);
    }
componentDidMount(){
    this.getProducts();
}

   getProducts = () => {
       axios.get('/api/inventory').then(response => {
           this.setState({
               inventoryList: response.data
           });
       })
   } 




    render(){
        const mappedList = this.state.inventoryList.map((product, index) => {
            return <Product key={product.id} product={product} removeProduct={this.removeProduct}/>
        })
        return (
            <div>
            
            <div>{mappedList}</div>
            </div>
        )
    }

    
}

export default Dashboard;
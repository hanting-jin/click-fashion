import React from 'react';
import SHOP_DATA from "./shop.data"
import "./shop.scss"

import Category from '../../components/category/category';

export default class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <Category key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
            
        )

    }
}
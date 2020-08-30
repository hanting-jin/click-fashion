/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import './category.scss';

import Product from '../product/product';

const Category = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx)=>idx <4)
              
                .map((item)=>(
                    <Product key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)

export default Category;
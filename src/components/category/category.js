/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import './category.scss';

import Product from '../product/product';

const Category = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx)=>idx <4)
                // control display how many product item under category
                .map(({id, ...otherItemProps})=>(
                    <Product key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)

export default Category;
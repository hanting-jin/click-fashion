import React from 'react';
import {connect} from 'react-redux';
import './collection.scss'

import {selectCollection} from '../../redux/shop/shop.selector'
import Product from '../../components/product/product'


const CollectionPage = ({collection}) => {

    const { title,items } = collection;
    
    return (
    <div className="collection-page">
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {items.map(item => (
            <Product key={item.id} item={item} />
            ))}
        </div>
    </div> 
    )
}

const mapStateToProps = (state,ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);
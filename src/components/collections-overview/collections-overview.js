import React from 'react';
import {connect}from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.scss';

import Category from '../category/category';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
          {
                collections.map(({id, ...otherCollectionProps})=>(
                    <Category key={id} {...otherCollectionProps}/>
                ))
            }
    </div>
      
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);
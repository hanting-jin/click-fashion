import React from 'react';
import './directory.scss';

import MenuItem from '../menu-item/menu-item';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

const Directory = ({sections}) =>(
  <div className="directory">
          {
            sections.map(({ id, ...otherSectionProps}) => (
              // put title, imageUrl, size, linkUrl into ...otherSectionProps state value collection, because MenuItem component doesn't need ID so that don't pass it.
              <MenuItem 
                key = {id}
                {...otherSectionProps}
              />
            ))
          }
        </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
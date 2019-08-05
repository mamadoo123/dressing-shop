import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectSections} from '../../redux/section/section-selector';
import MenuItem from '../menuItem/menu-item-component';
import './menu-component.scss';

const Menu = ({sections})=> {
        return(
          <div className="directory-menu">
            {sections.map(({id, ...otherSectionProps}) =>(
                <MenuItem key={id} {...otherSectionProps} />
            ))
            }
          </div>
        );
}
const mapStateToProps = createStructuredSelector({sections: selectSections});
export default connect(mapStateToProps)(Menu)
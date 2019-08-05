import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/collection/collection-selector';
import CollectionPreview from '../collection-preview/collection-preview-component';

import './collection-overview.scss';

const CollectionOverview = ({collections}) =>(
    <div className="collection-overview">
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id}  {...otherCollectionProps}/>
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview});
export default connect(mapStateToProps)(CollectionOverview)
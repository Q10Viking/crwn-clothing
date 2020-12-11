import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionsOverView = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverView)
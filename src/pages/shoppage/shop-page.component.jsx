import './shop-page.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import shopSelector from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) => (
    <div className="shop-page">
        {
            collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    collections: shopSelector
})

export default connect(mapStateToProps)(ShopPage);
import './category.styles.scss';
import {collectionSelector} from '../../redux/shop/shop.selector';

import {connect} from 'react-redux';

const Category = ({match,collection}) => (
    <div className="category">
        category {match.params.category}
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: collectionSelector(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(Category);
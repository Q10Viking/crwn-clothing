import './category.styles.scss';
import {collectionSelector} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';


const Category = ({collection}) => {
    console.log(collection)
    return (
        <div className="category">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item =>
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: collectionSelector(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(Category);
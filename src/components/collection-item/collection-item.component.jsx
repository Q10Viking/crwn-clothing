import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({id,imageUrl,name,price})=>(
    <div className="collection-item">
        <div className="image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />

        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>

        <CustomButton inverted>ADD TO CART</CustomButton>
    </div>

);

export default CollectionItem;
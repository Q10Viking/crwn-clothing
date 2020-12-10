import './shop-page.styles.scss';

import {Route} from 'react-router-dom';

import CollectionsOverView from '../../components/collections-overview/collections-overview.component';
import Category from '../category/category.component';

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverView}/>
        <Route exact path={`${match.path}/:category`} component={Category}/>
    </div>
);


export default ShopPage;
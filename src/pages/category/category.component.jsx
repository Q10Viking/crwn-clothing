import './category.styles.scss';

const Category = ({match}) => (
    <div className="category">
        category {match.params.category}
    </div>
);

export default Category;
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import directorySelector from '../../redux/directory/directory.selector';

const Directory = ({sections}) => (
  <div className="directory-menu">
     { sections.map(({id,...otherSections})=>(
          <MenuItem key={id} {...otherSections} />
      ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: directorySelector
})

export default connect(mapStateToProps)(Directory);
import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import { ActionCreators } from '../../../../actions/profile';

// const RightPanel = ...

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(withRouter(RightPanel))
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { ProfileImage, Divider, UserDetails, Welcome } from '../../components';

export class Home extends Component {
  render() {
    console.log('this.props.profile',this.props.profile)

    return (
      <div className="row">
        {/* <ProfileImage /> */}
        {/* <Divider /> */}
        <div className="rightPanel">
          {/* <Welcome user={this.props.profile} /> */}
          {/* <UserDetails user={this.props.profile} /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log('state::::',state)

  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(Home);
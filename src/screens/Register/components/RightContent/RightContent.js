// import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";
// import { connect } from 'react-redux';
// // import { ActionCreators } from '../../../../actions/registerAction';
// // import { InputRange, MultiSelect } from '../../../../components';
// // import stateList from '../../../../mock/state.json';
// import { formatPhoneNumber, isValidEmail } from '../../../../utils';
// import './style.css';

// export class RightContent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: {
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: ''
//             },
//             errors: {
//                 user: {
//                     firstName: 'Enter First Name',
//                     lastName: 'Enter Last Name',
//                     email: 'Email is not valid!',
//                     password: 'Enter a valid Password',
//                 }
//             },
//             validForm: false,
//             submitted: false
//         }
//     }

//     componentDidMount() {
//         if (this.props.profile) {
//             this.setState({ user: this.props.profile });
//             if (this.props.profile.email) {
//                 this.resetErrorMsg();
//             }
//         }
//     }

//     validationErrorMessage = (event) => {
//         const { name, value } = event.target;
//         let errors = this.state.errors;

//         switch (name) {
//             case 'firstName':
//                 errors.user.firstName = value.length < 1 ? 'Enter First Name' : '';
//                 break;
//             case 'email':
//                 errors.user.email = isValidEmail(value) ? '' : 'Email is not valid!';
//                 break;
//             case 'password':
//                 errors.user.password = value.length < 1 && value.length > 10 ? 'Enter valid password number' : '';
//                 break;
//             default:
//                 break;
//         }

//         this.setState({ errors });
//     }

//     inputChange = (event) => {
//         // let telphone = ''
//         const { name, value } = event.target;
//         const user = this.state.user;
//         // if (name === 'telephone') {
//         //   telphone = formatPhoneNumber(value);
//         //   user[name] = telphone;
//         // } else {
//         user[name] = value;
//         // }
//         this.setState({ user });
//         this.validationErrorMessage(event);
//     }

//     checkboxChange = (event) => {
//         const { name, checked } = event.target;
//         const user = this.state.user;
//         user[name] = checked;
//         this.setState({ user });
//     }

//     onChangeAddress = (event) => {
//         const user = this.state.user;
//         user['address'] = event.target.value;
//         this.setState({ user });
//     }

//     //   onChangeInputRange = (value) => {
//     //     const user = this.state.user;
//     //     user['age'] = value;
//     //     this.setState({ user })
//     //   }

//     onSelectedInterest = (value) => {
//         const user = this.state.user;
//         const errors = this.state.errors;
//         user['interests'] = value;
//         errors.user.interests = value.length < 1 ? 'Enter your Interests' : '';
//         this.setState({ user, errors });
//     }

//     validateForm = (errors) => {
//         let valid = true;
//         Object.entries(errors.user).forEach(item => {
//             console.log(item)
//             item && item[1].length > 0 && (valid = false)
//         })
//         return valid;
//     }

//     submitForm = async (event) => {
//         this.setState({ submitted: true });
//         // this.props.dispatch(ActionCreators.formSubmittionStatus(true));
//         const user = this.state.user;
//         // if (user && this.props.profile) {
//         //   user.profileImage = this.props.profile.profileImage;
//         // }
//         event.preventDefault();
//         // if (this.validateForm(this.state.errors) && this.props.profile && this.props.profile.profileImage) {
//         // console.info('Valid Form')
//         // this.props.dispatch(ActionCreators.addProfile(user));
//         this.props.history.push('/home')
//         // } else {
//         //   console.log('Invalid Form')
//         // }
//     }

//     resetErrorMsg = () => {
//         let errors = this.state.errors;
//         errors.user.firstName = ''
//         errors.user.email = ''
//         errors.user.password = ''
//         this.setState({ errors });
//     }

//     render() {
//         const { firstName, lastName, email, password } = this.state.user;
//         const { submitted } = this.state;
//         return (
//             <div className="rightPanel">
//                 <div className="row">
//                     <div className="col-sm-1">
//                     </div>
//                     <label className="col-sm-2 col-form-label">Name</label>
//                     <div className="col-sm-3 mb-2">
//                         <input type="text" value={firstName} name="firstName" onChange={(e) => { this.inputChange(e) }} className="form-control" placeholder="First Name" />
//                         {submitted && this.state.errors.user.firstName.length > 0 && <span className='error'>{this.state.errors.user.firstName}</span>}
//                     </div>
//                     <div className="col-sm-3 mb-2">
//                         <input type="text" value={lastName} name="lastName" onChange={(e) => { this.inputChange(e) }} className="form-control" placeholder="Last Name" />
//                     </div>
//                     <div className="col-sm-3">
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-sm-1">
//                     </div>
//                     <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
//                     <div className="col-sm-6 mb-2">
//                         <input type="email" value={email} name="email" onChange={(e) => { this.inputChange(e) }} className="form-control" id="email" placeholder="anyone@email.com" />
//                         {submitted && this.state.errors.user.email.length > 0 && <span className='error'>{this.state.errors.user.email}</span>}
//                     </div>
//                     <div className="col-sm-3">
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-sm-1">
//                     </div>
//                     <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
//                     <div className="col-sm-6 mb-2">
//                         <input type="password" value={password} name="password" onChange={(e) => { this.inputChange(e) }} className="form-control" id="password" placeholder="*********" />
//                         {submitted && this.state.errors.user.password.length > 0 && <span className='error'>{this.state.errors.user.password}</span>}
//                     </div>
//                     <div className="col-sm-3">
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-sm-3 mb-2">
//                     </div>
//                     <div className='col-sm-2'>
//                         <a href="/home">Login</a>
//                     </div>
//                     <div className="col-sm-4">
//                         <button type="button" className="button" onClick={this.submitForm}>Submit</button>
//                     </div>
//                     <div className="col-sm-3"></div>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         profile: state.user?.profile
//     }
// }

// export default connect(mapStateToProps)(withRouter(RightContent));
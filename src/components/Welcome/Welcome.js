import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
// import { ActionCreators } from '../../actions/registerAction';
import { formatPhoneNumber, isValidEmail } from '../../utils';
import './style.css';

export class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                experience: '',
                education: '',
                summary: '',
                resume: ''
            },
            errors: {
                user: {
                    firstName: 'Enter First Name',
                    lastName: 'Enter Last Name',
                    email: 'Email is not valid!',
                    address: 'Enter a valid address',
                    experience: 'Enter years of experience',
                    education: 'Enter the university attended',
                    summary: 'Experience in ...',
                    resume: 'Link to your resume'
                }
            },
            validForm: false,
            submitted: false
        }
    }

    componentDidMount() {
        if (this.props.profile) {
            this.setState({ user: this.props.profile });
            if (this.props.profile.email) {
                this.resetErrorMsg();
            }
        }
    }

    validationErrorMessage = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstName':
                errors.user.firstName = value.length < 1 ? 'Enter First Name' : '';
                break;
            case 'email':
                errors.user.email = isValidEmail(value) ? '' : 'Email is not valid!';
                break;
            case 'address':
                errors.user.address = value.length < 1 && value.length > 10 ? 'Enter valid address number' : '';
                break;
            default:
                break;
        }

        this.setState({ errors });
    }

    inputChange = (event) => {
        // let telphone = ''
        const { name, value } = event.target;
        const user = this.state.user;
        // if (name === 'telephone') {
        //   telphone = formatPhoneNumber(value);
        //   user[name] = telphone;
        // } else {
        user[name] = value;
        // }
        this.setState({ user });
        this.validationErrorMessage(event);
    }

    checkboxChange = (event) => {
        const { name, checked } = event.target;
        const user = this.state.user;
        user[name] = checked;
        this.setState({ user });
    }

    onChangeAddress = (event) => {
        const user = this.state.user;
        user['address'] = event.target.value;
        this.setState({ user });
    }

    //   onChangeInputRange = (value) => {
    //     const user = this.state.user;
    //     user['age'] = value;
    //     this.setState({ user })
    //   }

    onSelectedInterest = (value) => {
        const user = this.state.user;
        const errors = this.state.errors;
        user['interests'] = value;
        errors.user.interests = value.length < 1 ? 'Enter your Interests' : '';
        this.setState({ user, errors });
    }

    validateForm = (errors) => {
        let valid = true;
        Object.entries(errors.user).forEach(item => {
            console.log(item)
            item && item[1].length > 0 && (valid = false)
        })
        return valid;
    }

    submitForm = async (event) => {
        this.setState({ submitted: true });
        // this.props.dispatch(ActionCreators.formSubmittionStatus(true));
        const user = this.state.user;
        // if (user && this.props.profile) {
        //   user.profileImage = this.props.profile.profileImage;
        // }
        event.preventDefault();
        // if (this.validateForm(this.state.errors) && this.props.profile && this.props.profile.profileImage) {
        // console.info('Valid Form')
        // this.props.dispatch(ActionCreators.addProfile(user));
        this.props.history.push('/home')
        // } else {
        //   console.log('Invalid Form')
        // }
    }

    resetErrorMsg = () => {
        let errors = this.state.errors;
        errors.user.firstName = ''
        errors.user.telephone = ''
        errors.user.email = ''
        errors.user.address = ''
        this.setState({ errors });
    }
    render() {

        const { firstName, lastName, email, address, experience, education, summary, resume } = this.state.user;
        const { submitted } = this.state;
        console.log('this.props.user', window.localStorage.getItem('user'))
        return (
            <><div><p>Welcome {window.localStorage.getItem('user')} ! <a href="#" onClick={() => {
                console.log('logged out');
                return window.localStorage.clear();
            }}>logout</a></p></div><div className="rightPanel">
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-3 mb-2">
                            <input type="text" value={firstName} name="firstName" onChange={(e) => { this.inputChange(e); }} className="form-control" placeholder="First Name" />
                            {submitted && this.state.errors.user.firstName.length > 0 && <span className='error'>{this.state.errors.user.firstName}</span>}
                        </div>
                        <div className="col-sm-3 mb-2">
                            <input type="text" value={lastName} name="lastName" onChange={(e) => { this.inputChange(e); }} className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-6 mb-2">
                            <input type="email" value={email} name="email" onChange={(e) => { this.inputChange(e); }} className="form-control" id="email" placeholder="anyone@email.com" />
                            {submitted && this.state.errors.user.email.length > 0 && <span className='error'>{this.state.errors.user.email}</span>}
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-6 mb-2">
                            <input type="text" value={address} name="address" onChange={(e) => { this.inputChange(e); }} className="form-control" id="address" placeholder="KK *** st" />
                            {submitted && this.state.errors.user.address.length > 0 && <span className='error'>{this.state.errors.user.address}</span>}
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <label htmlFor="experience" className="col-sm-2 col-form-label">Experience</label>
                        <div className="col-sm-6 mb-2">
                            <input type="text" value={experience} name="experience" onChange={(e) => { this.inputChange(e); }} className="form-control" id="experience" placeholder="** Years" />
                            {submitted && this.state.errors.user.experience.length > 0 && <span className='error'>{this.state.errors.user.experience}</span>}
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <label htmlFor="education" className="col-sm-2 col-form-label">Education</label>
                        <div className="col-sm-6 mb-2">
                            <input type="text" value={education} name="education" onChange={(e) => { this.inputChange(e); }} className="form-control" id="education" placeholder="University of ****" />
                            {submitted && this.state.errors.user.education.length > 0 && <span className='error'>{this.state.errors.user.education}</span>}
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <label htmlFor="summary" className="col-sm-2 col-form-label">summary</label>
                        <div className="col-sm-6 mb-2">
                            <input type="text" value={summary} name="summary" onChange={(e) => { this.inputChange(e); }} className="form-control" id="summary" placeholder="Experienced in ....." />
                            {submitted && this.state.errors.user.summary.length > 0 && <span className='error'>{this.state.errors.user.summary}</span>}
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <label htmlFor="resume" className="col-sm-2 col-form-label">resume</label>
                        <div className="col-sm-6 mb-2">
                            <input type="resume" value={resume} name="resume" onChange={(e) => { this.inputChange(e); }} className="form-control" id="resume" placeholder="Link to your resume" />
                            {submitted && this.state.errors.user.resume.length > 0 && <span className='error'>{this.state.errors.user.resume}</span>}
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1 mb-2">
                        </div>
                        <div className='col-sm-4'>
                            {/* <a href="/home">Login</a> */}
                        </div>
                        <div className="col-sm-4">
                            <button type="button" className="button" onClick={this.submitForm}>Submit</button>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div></>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.user?.profile
    }
}

export default connect(mapStateToProps)(withRouter(Welcome));
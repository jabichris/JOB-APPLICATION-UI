import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import { isValidEmail } from '../../utils';
import './style.css';
import { userApply } from '../../features/application/applicationActions';
import { ToastContainer, toast } from 'react-toastify';

const ApplicationForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [summary, setSummary] = useState('');
    const [resume, setResume] = useState('');

    const [errorMessage, setErrorMessage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        experience: '',
        education: '',
        summary: '',
        resume: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const { loading, applicationInfo, error } = useSelector((state) => {
        return state.application
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //         errors: {
    //             user: {
    //                 firstName: 'Enter First Name',
    //                 lastName: 'Enter Last Name',
    //                 email: 'Email is not valid!',
    //                 address: 'Enter a valid address',
    //                 experience: 'Enter years of experience',
    //                 education: 'Enter the university attended',
    //                 summary: 'Experience in ...',
    //                 resume: 'Link to your resume'
    //             }
    //         },
    //         validForm: false,
    //         submitted: false
    //     }
    // }

    const validationErrorMessage = (event) => {
        const { name, value } = event.target;
        // let errors = this.state.errors;

        switch (name) {
            case 'firstName':
                const firstNameError = value.length < 1 ? 'Enter First Name' : '';
                setErrorMessage({ firstName: firstNameError });
                break;
            case 'email':
                const emailError = isValidEmail(value) ? '' : 'Email is not valid!';
                setErrorMessage({ email: emailError });
                break;
            case 'address':
                const addressError = value.length < 1 && value.length > 10 ? 'Enter valid address number' : '';
                setErrorMessage({ address: addressError });
                break;
            default:
                break;
        }

        // setErrorMessage({ errors });
    }

    const validateForm = (errors) => {
        let valid = true;
        Object.entries(errors).forEach(item => {
            console.log(item)
            item && item[1].length > 0 && (valid = false)
        })
        return valid;
    }

    const submitForm = async (event) => {
        // this.setState({ submitted: true });
        setSubmitted(true);
        // this.props.dispatch(ActionCreators.formSubmittionStatus(true));
        // const user = this.state.user;
        // if (user && this.props.profile) {
        //   user.profileImage = this.props.profile.profileImage;
        // }
        event.preventDefault();
        if (validateForm(errorMessage)) {
            console.info('Valid Form',applicationInfo)
            dispatch(
                userApply({
                    firstName,
                    lastName,
                    email,
                    address,
                    experience,
                    education,
                    summary,
                    resume
                })
            );
            console.info('Valid Form',applicationInfo)
            toast('Success')
            // this.props.history.push('/home')
        } else {
            toast('Failed')
            console.log('Invalid Form')
        }
    }

    // const resetErrorMsg = () => {
    //     let errors = this.state.errors;
    //     errors.user.firstName = ''
    //     errors.user.telephone = ''
    //     errors.user.email = ''
    //     errors.user.address = ''
    //     this.setState({ errors });
    // }
    // const { firstName, lastName, email, address, experience, education, summary, resume } = this.state.user;
    // const { submitted } = this.state;
    // const displayName = jwt(window.localStorage.getItem('userToken')).firstName
    return (
        <>
      <ToastContainer />
        <div className="rightPanel">
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-3 mb-2">
                        <input type="text" value={firstName} name="firstName" onChange={(e) => { setFirstName(e.target.value); }} className="form-control" placeholder="First Name" />
                        {submitted && errorMessage.firstName.length > 0 && <span className='error'>{errorMessage.firstName}</span>}
                    </div>
                    <div className="col-sm-3 mb-2">
                        <input type="text" value={lastName} name="lastName" onChange={(e) => { setLastName(e.target.value); }} className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6 mb-2">
                        <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="anyone@email.com" />
                        {submitted && errorMessage.email.length > 0 && <span className='error'>{errorMessage.email}</span>}
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-6 mb-2">
                        <input type="text" value={address} name="address" onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder="KK *** st" />
                        {submitted && errorMessage.address.length > 0 && <span className='error'>{errorMessage.address}</span>}
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <label htmlFor="experience" className="col-sm-2 col-form-label">Experience</label>
                    <div className="col-sm-6 mb-2">
                        <input type="text" value={experience} name="experience" onChange={(e) => setExperience(e.target.value)} className="form-control" id="experience" placeholder="** Years" />
                        {submitted && errorMessage.experience.length > 0 && <span className='error'>{errorMessage.experience}</span>}
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <label htmlFor="education" className="col-sm-2 col-form-label">Education</label>
                    <div className="col-sm-6 mb-2">
                        <input type="text" value={education} name="education" onChange={(e) => setEducation(e.target.value)} className="form-control" id="education" placeholder="University of ****" />
                        {submitted && errorMessage.education.length > 0 && <span className='error'>{errorMessage.education}</span>}
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <label htmlFor="summary" className="col-sm-2 col-form-label">summary</label>
                    <div className="col-sm-6 mb-2">
                        <input type="text" value={summary} name="summary" onChange={(e) => setSummary(e.target.value)} className="form-control" id="summary" placeholder="Experienced in ....." />
                        {submitted && errorMessage.summary.length > 0 && <span className='error'>{errorMessage.summary}</span>}
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <label htmlFor="resume" className="col-sm-2 col-form-label">resume</label>
                    <div className="col-sm-6 mb-2">
                        <input type="resume" value={resume} name="resume" onChange={(e) => setResume(e.target.value)} className="form-control" id="resume" placeholder="Link to your resume" />
                        {submitted && errorMessage.resume.length > 0 && <span className='error'>{errorMessage.resume}</span>}
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
                        <button type="button" className="button" onClick={submitForm}>Submit</button>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </>
    )
}


export default ApplicationForm;
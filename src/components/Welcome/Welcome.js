import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwt from 'jwt-decode'
import './style.css';
import { getApplications } from '../../features/application/applicationActions';

const Welcome = () => {
    const { loading, applicationInfo, error } = useSelector((state) => state.application);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(
            getApplications()
        );
    }, []);
    const displayName = window.localStorage.getItem('userToken')?jwt(window.localStorage.getItem('userToken')).firstName:null
    return (
        <>
            <div className='row'>
                <div className='col-sm-6'>
                    <p>Welcome {displayName} !
                        <a href="#" onClick={() => {
                            navigate('/');
                            return window.localStorage.clear();
                        }}>logout</a>
                    </p>
                </div>
                <div className='col-sm-6'>
                    <a href="/application" onClick={() => {
                        return navigate('/application');
                    }}>Apply here</a>
                </div>
            </div>

            <div className="rightPanel">
                {/*  */}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicationInfo?.map((item, index) => {
                            return (<>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                </tr>
                            </>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Welcome;
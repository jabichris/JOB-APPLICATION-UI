import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://jobapplication.fly.dev/';

export const userLogin = createAsyncThunk('user/login', async ({ email, password }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post('api/v1/user/login', { email, password }, config);

        localStorage.setItem('userToken', data.data.token);
        return data.data;
    } catch (error) {
        console.log(error);
    }
});

export const registerUser = createAsyncThunk('user/register', async ({ firstName, lastName, email, password }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const  {data} = await axios.post('api/v1/user/register', { firstName, lastName, email, password }, config);
        console.log("data>>>><<<<",data)
        localStorage.setItem('userToken', data.data.token);
        return data.data;
    } catch (error) {
        console.log(error.response.data.errors);
        // return error.response.data.errors
    }
});


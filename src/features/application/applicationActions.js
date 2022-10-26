import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://jobapplication.fly.dev/';

export const userApply = createAsyncThunk('user/apply', async ({
    firstName,
    lastName,
    email,
    address,
    experience,
    education,
    summary,
    resume
}) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post('api/v1/job-application/apply', {
            firstName,
            lastName,
            email,
            address,
            experience,
            education,
            summary,
            resume
        }, config);
        // localStorage.setItem('userToken', data.data.token);
        return data.data;
    } catch (error) {
        console.log(error);
    }
});

// export const registerUser = createAsyncThunk('user/register', async ({ firstName, lastName, email, password }) => {
//     try {
//         const config = {
//             headers: {
//                 'Content-Type': 'applications/json',
//             },
//         };

//         await axios.post('api/v1/user/login', { firstName, lastName, email, password }, config);
//     } catch (error) {
//         console.log(error);
//     }
// });

export const getApplications = createAsyncThunk("user/getUserApplications", async (arg, { getState, rejectWithValue }) => {
    try {
        const { user } = getState()
        const config = {
            headers: {
                "Authorization": `Bearer ${user.userToken}`
            }
        }

        const { data } = await axios.get('api/v1/job-application?page=1&limit=5', config)
        return data.items
    } catch (error) {
        console.log(error)
    }
})

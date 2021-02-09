import React from 'react';
import { Router } from '@reach/router';
import Layout from '../Components/Layout';
import Profile from '../Components/Profile';
import Login from '../Components/Login';

const App = () => (
    <Layout>
        <Router>
            <Profile path='/app/profile' />
        </Router>
    </Layout>
)
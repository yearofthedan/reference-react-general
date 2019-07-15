import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ProfileProvider from "./profileProvider/ProfileProvider";

render(
    <ProfileProvider id="some-id">
        <App />
    </ProfileProvider>
, document.getElementById('main'));

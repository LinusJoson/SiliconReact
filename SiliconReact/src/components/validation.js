import React from 'react';
import { useState } from 'react';


export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === '') {
        return 'This field cannot be empty';
    } else if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }

    return ''; 
};

export default validateEmail;
import { createLoginForm } from './login.js'

// Function to check if JWT is present and valid
export async function checkJWT() {
    const token = localStorage.getItem('jwt');

    if (!token) {
        console.log('No JWT found in local storage');
        return false;
    }

    try {
        const response = await fetch('https://01.kood.tech/api/auth/verify', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Token is invalid or server error');
        }

        const result = await response.json();
        if (result.valid) {
            console.log('JWT is valid');
            return true;
        } else {
            console.log('JWT is invalid');
            return false;
        }
    } catch (error) {
        console.log('Error verifying JWT:', error.message);
        return false;
    }
}

// Example usage
checkJWT().then(isValid => {
    if (isValid) {
        // Token is valid, proceed with authenticated actions
    } else {

        createLoginForm();

    }
});

import { createLoginForm } from './login.js'
import { fetchUserData } from './query.js'
import { createStatPage } from './statPage.js'

// TO REMOVE EXISTING TOKEN
// localStorage.removeItem('jwt');

// TO ADD INVALID TOKEN
// localStorage.setItem('jwt', 'a.pInKuyG6yfnVe7bZ8nnSFXJbADjPnmeXphOGHe8JNSE');

// Check if there is a token
if (localStorage.getItem('jwt')) {

    // Check if the token is correct
    const userData = await fetchUserData();
    if (userData) {

        createStatPage(userData);

    } else {

        localStorage.removeItem('jwt');
        location.reload();

    }

} else {

    createLoginForm();

}

// adubtsov token:
// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDI1MSIsImlhdCI6MTcyMTk2NjY3MSwiaXAiOiIxNzIuMjMuMC4yIiwiZXhwIjoxNzIyMDUzMDcxLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1jYW1wdXNlcyI6Int9IiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiIxMDI1MSIsIngtaGFzdXJhLXRva2VuLWlkIjoiMDg3ZDA0NjItNjFlZC00OGE4LTk1NDEtZjA3NjM5MTZhYTFhIn19.pInKuyG6yfnVe7bZ8nnSFXJbADjPnmeXphOGHe8JNSE

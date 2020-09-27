import React, { useContext, useState } from 'react';
import Category from '../Category/Category';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Container, TextField } from '@material-ui/core';
import { UserContext } from '../../App';
import FacebookIcon from '@material-ui/icons/Facebook';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { initFirebase, handleGoogleSignIn, handleFBSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword, resetPassword } from './LoginManager';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '50ch',
        },
        '& Button': {
            width: '27rem',
            marginBottom: '2ch',
            marginLeft: '1rem'
        }
    },
    loginBtn: {
        '& Button': {
            width: '27rem',
            marginBottom: '2ch',
            marginLeft: '1rem'
        }
    },
    clickable: {
        cursor: 'pointer',
        color: 'red',
        marginLeft: '5px',
        textAlign: 'center',
    }
}));

const Login = () => {
    const classes = useStyles();
    // Initialize Firebase
    initFirebase();
    // Data load from context API
    const {
        loggedUser: [loggedInUser, setLoggedInUser],
        userState: [user, setUser]
    } = useContext(UserContext);

    // State for checking if an user is new or old
    const [newUser, setNewUser] = useState(true);
    // State for reset/forgot password to change the form fields
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    // State for isResetPassword to show the message
    const [isResetPassword, setIsResetPassword] = useState(false);
    // State for error message
    const [errorMessage, setErrorMessage] = useState('');
    // State for validation message
    const [validation, setValidation] = useState('');
    // State for email verification message
    const [verifyMsg, setVerifyMsg] = useState('');
    // State for input field value
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        loginEmail: '',
        loginPassword: '',
        password: '',
        confirmPassword: ''
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Destructuring user state
    const { name, email, password, loginEmail, loginPassword } = inputValue;
    // console.log(name, email, loginEmail, loginPassword, password, confirmPassword)

    const handleChange = (e) => {
        let isFieldValid = true;

        // Email validation with Regex
        if (e.target.name === 'email' || e.target.name === 'loginEmail') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            if (!isFieldValid) {
                setValidation('Please insert a valid email with @ and .!')
            }
        }

        // Password validation with Regex
        if (e.target.name === 'password' || e.target.name === 'loginPassword') {
            const isPasswordValid = e.target.value.length > 6
            const hasNumber = /\d{1}/.test(e.target.value);
            // setPass(e.target.value);
            isFieldValid = isPasswordValid && hasNumber;
            if (!isFieldValid) {
                setValidation('Password must be 1 char, 1 latter and 7 length')
            }
        }

        // Confirm password validation isMatched with password
        if (e.target.name === 'confirmPassword') {
            const isPasswordValid = e.target.value.length > 6
            const hasNumber = /\d{1}/.test(e.target.value);
            const isMatched = password === e.target.value
            isFieldValid = isPasswordValid && hasNumber && isMatched;
            if (!isMatched) {
                setValidation('Oops...! Password is not matched. Continue trying')
            }
        }
        // Update user state
        // if (isFieldValid) {
        //     const newUserInfo = { ...user }
        //     newUserInfo[e.target.name] = e.target.value;
        //     setUser(newUserInfo)
        // }

        // When a field is valid, update inputValue state
        if (isFieldValid) {
            // If a field is valid, update validation state to be empty
            setValidation('');
            setInputValue({
                ...inputValue,
                [e.target.name]: e.target.value
            })
        }

    }

    const handleResponse = (res, redirect) => {
        // When error comes executes handleError func
        // to show the error message
        if (!res.success) {
            return handleError(res.error);
        } else {
            setUser(res);
            setLoggedInUser(res);
            // Redirect when signed in
            if (redirect) history.replace(from);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // For new user sign up / create account
        if (newUser && email && password) {
            createUserWithEmailAndPassword(name, email, password)
                .then(res => {
                    handleResponse(res, true);
                    if (res.success) {
                        setVerifyMsg('Verification link is sent. Please check your email');
                    }
                })
                .catch(err => handleError(err.message));
        }
        // For old users sign in / login
        if (!newUser && loginEmail && loginPassword) {
            console.log('signin')
            signInWithEmailAndPassword(loginEmail, loginPassword)
                .then(res => handleResponse(res, true));
        }

        // Reset Password for old user
        if (!newUser && loginEmail && isForgotPassword) {
            console.log('reset')
            resetPassword(loginEmail)
                .then(() => setIsResetPassword(true))
                .catch(err => handleError(err.message));
        }

    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFBSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleError = (msg, duraction = 30000) => {
        setErrorMessage(msg);
        // Disable message button after 5 seconds automatically
        setInterval(() => {
            setErrorMessage('');
        }, duraction)
    }

    // const handleValidation = (msg) => {
    //     setValidation(msg);
    // }

    // When sign in btn is clicked, some states will be set by default 
    const handleSignInDefault = () => {
        setNewUser(!newUser);
        setIsForgotPassword(false);
        setIsResetPassword(false);
        setErrorMessage('');
        setValidation('');
    }

    return (
        <Container>
            <Category />
            {
                isResetPassword
                &&
                <Button
                    variant="outlined"
                    color="secondary"
                >
                    The reset link is sent to your mail. Please check it out. Thanks!
                </Button>
            }
            {
                errorMessage
                && <Button
                    variant="outlined"
                    color="secondary"
                >
                    {errorMessage}
                </Button>
            }
            {
                verifyMsg
                && <Button
                    variant="outlined"
                    color="secondary"
                >
                    {verifyMsg}
                </Button>
            }
            <br />
            <Grid item xs={12}>
                <form
                    onSubmit={handleSubmit}
                    className={classes.root}
                    noValidate
                    autoComplete="off">
                    <h2 style={{ marginLeft: '1rem' }}>
                        {
                            newUser
                                ? 'Create an account'
                                : isForgotPassword
                                    ? 'Reset Password'
                                    : 'Login'
                        }
                    </h2>
                    {
                        validation
                        && <Button variant="outlined" color="secondary">
                            {validation}
                        </Button>
                    }
                    {
                        newUser
                        && <TextField
                            onChange={(e) => { handleChange(e) }}
                            required
                            name="name"
                            label="Name"
                            placeholder="John Due"
                            variant="outlined"
                        />
                    }
                    <br />
                    <TextField
                        onChange={(e) => { handleChange(e) }}
                        required
                        name={
                            newUser
                                ? "email"
                                : "loginEmail"
                        }
                        label="Email"
                        type="email"
                        placeholder="example@abc.com"
                        variant="outlined"
                    />
                    <br />
                    {
                        !isForgotPassword
                        && <TextField
                            onChange={(e) => { handleChange(e) }}
                            required
                            name={
                                newUser
                                    ? "password"
                                    : "loginPassword"
                            }
                            label="Password"
                            type="password"
                            placeholder="******"
                            variant="outlined"
                        />
                    }
                    <br />
                    {
                        newUser
                        && <TextField
                            onChange={(e) => { handleChange(e) }}
                            required
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            placeholder="******"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                    }

                    {
                        !newUser
                        && <div style={{ marginLeft: '7rem', marginTop: '-1rem' }}>
                            {
                                isForgotPassword
                                    ? <p>Remember password?
                                        <span
                                            className={classes.clickable}
                                            onClick={() => setIsForgotPassword(!isForgotPassword)}
                                        >   Login
                                        </span>
                                    </p>
                                    : <p>Forgot Password?
                                        <span
                                            className={classes.clickable}
                                            style={{ color: 'red' }}
                                            onClick={() => setIsForgotPassword(!isForgotPassword)}
                                        >   Reset Password
                                        </span>
                                    </p>
                            }
                        </div>
                    }
                    <br />
                    <Button
                        className={classes.loginBtn}
                        variant="contained"
                        color="secondary"
                        type="submit"
                    >
                        {
                            newUser
                                ? 'Sign In'
                                : isForgotPassword
                                    ? 'Reset'
                                    : 'Login'
                        }
                    </Button>
                    <div style={{ marginLeft: '7rem', marginTop: '-1rem' }}>
                        {
                            newUser
                                ? <p>Already have an account?
                                    <span
                                        className={classes.clickable}
                                        onClick={() => setNewUser(!newUser)}
                                    >   Login
                                    </span>
                                </p>
                                : <p>Don't have an account?
                                    <span
                                        className={classes.clickable}
                                        style={{ color: 'red' }}
                                        onClick={() => handleSignInDefault()}
                                    >   Sign In
                                    </span>
                                </p>
                        }
                    </div>
                </form>
                <div className={classes.loginBtn}>
                    <Button
                        onClick={fbSignIn}
                        variant="outlined"
                        color="secondary"
                    >
                        <FacebookIcon />
                        Continue with Facebook
                    </Button>
                    <br />
                    <Button
                        onClick={googleSignIn}
                        variant="outlined"
                        color="secondary"
                    >
                        <AlternateEmailIcon />
                        Continue with Google
                    </Button>
                </div>
            </Grid>
        </Container>

    );
};

export default Login;
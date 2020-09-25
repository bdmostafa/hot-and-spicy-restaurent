import React, { useContext, useState } from 'react';
import Category from '../Category/Category';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Container, TextField } from '@material-ui/core';
import { UserContext } from '../../App';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '50ch',
        },
    },
    loginBtn: {
        width: '50ch'
    }
}));

const Login = () => {
    const classes = useStyles();
    const {loggedUser, user} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedUser;
    const [newUser, setNewUser] = user;
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewUser(inputValue);
        setLoggedInUser(inputValue);
        history.replace(from);
    }
    console.log(from)
    return (
        <Container>
            <Category />
            <Grid item xs={12}>
                <form
                    onSubmit={handleSubmit}
                    className={classes.root}
                    noValidate
                    autoComplete="off">
                    <TextField
                        onChange={(e) => { handleChange(e) }}
                        required
                        name="name"
                        label="Name"
                        placeholder="John Due"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(e) => { handleChange(e) }}
                        required
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="example@abc.com"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(e) => { handleChange(e) }}
                        required
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="******"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(e) => { handleChange(e) }}
                        required
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="******"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <Button
                        // onClick={handleAddToCart}
                        className={classes.loginBtn}
                        variant="contained"
                        color="secondary"
                        type="submit"
                    >
                        Sign In
                    </Button>
                </form>
            </Grid>
        </Container>

    );
};

export default Login;
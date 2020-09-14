import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo/logo2.png';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        '& img': {
            width: '10rem'
        }
    },
    signUpBtn: {
        margin: theme.spacing(1),
        borderRadius: '2rem'
    }
}));

const HeaderTop = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img className={classes.img} src={logo} alt="" />
                    </Typography>
                    <AddShoppingCartIcon />
                    <Button color="primary">Login</Button>
                    <Button variant="contained" color="secondary" className={classes.signUpBtn}>
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );

};

export default HeaderTop;

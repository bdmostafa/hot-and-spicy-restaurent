import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo2 from '../../images/logo/logo.png'
import { List, ListItem, ListItemText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '2rem',
        '& img': {
            width: '75%'
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const FooterTop = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <img src={logo2} alt="" />
                    <p>#58BC, D Block,
                        <br />
                        ABC Road, Dhaka
                        <br />
                        Bangladesh
                    </p>
                </Grid>
                <Grid item xs={6} sm={3}></Grid>
                <Grid item xs={6} sm={3}>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Aout Online Food" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Read Our Blog" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Sign Up To Deliver" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Add Your Restaurant" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Get Help" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Read FAQs" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="View All Cities" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Restaurants Near Me" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    );
};

export default FooterTop;
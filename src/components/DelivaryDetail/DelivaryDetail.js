import React from 'react';
import Category from '../Category/Category';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import fakeData from '../../fakeData';
import { Button, Container, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


const DelivaryDetail = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Category />
            <Grid container spacing={3}>
                <Grid style={{ textAlign: 'left' }} item xs={6}>
                    <form action="">
                        <FormControl>
                            <InputLabel htmlFor="name">Your Name</InputLabel>
                            <Input id="name" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="house">Road, Block, Floor</InputLabel>
                            <Input id="house" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="district">District</InputLabel>
                            <Input id="district" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="business-name">Businees Name</InputLabel>
                            <Input id="business-name" aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="phone">Phone Number</InputLabel>
                            <Input id="phone" aria-describedby="my-helper-text" />
                        </FormControl>
                    </form>
                </Grid>
                <Grid style={{ textAlign: 'right' }} item xs={6}>
                    cart
                </Grid>
            </Grid>
        </Container>

    );
};

export default DelivaryDetail;
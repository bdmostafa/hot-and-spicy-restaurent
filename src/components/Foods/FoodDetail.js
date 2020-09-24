import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import fakeData from '../../fakeData';
import { Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        flexGrow: 1,
    },
    categoryName: {
        '& span': {
            margin: '1.5rem'
        }
    },
    activeCategory: {
        borderBottom: '3px solid red'
    },
    categoryImg: {
        '& img': {
            width: '6rem',
            margin: '30px 40px 0px 0px'
        },
        // '& ChevronRightIcon': {
        //     marginBottom: '2.5rem'
        // }
    },
    foodImg: {
        width: '25rem'
    },
    countBtn: {
        borderRadius: '2rem',
        width: '5rem',
        marginLeft: '20px',
        '& span': {
            margin: '0 1rem',
            fontSize: '15px'
        }
    },
    plusSign: {
        color: 'red'
    },
    cartBtn: {
        borderRadius: '2rem'
    }
}));

const FoodDetail = () => {
    const classes = useStyles();
    const { categoryName, foodId } = useParams();
    const [cartCount, setCartCount] = useState(1);

    // cartCount minimum value must be 1
    if(cartCount < 1 ) setCartCount(1);

    const filteredFood = fakeData.filter(food => food.id == foodId);
    const { name, description, imgUrl, price } = filteredFood[0];

    const filteredCategory = fakeData.filter(food => food.category == categoryName);

    const slicedTwoItems = filteredCategory.slice(0, 2);

    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h4 className={classes.categoryName}>
                        {
                            categoryName === 'breakfast'
                                ? <span className={classes.activeCategory}>Breakfast</span>
                                : <span>Breakfast</span>
                        }
                        {
                            categoryName === 'lunch'
                                ? <span className={classes.activeCategory}>Lunch</span>
                                : <span>Lunch</span>
                        }
                        {
                            categoryName === 'dinner'
                                ? <span className={classes.activeCategory}>Dinner</span>
                                : <span>Dinner</span>
                        }
                    </h4>
                </Grid>
                <Grid style={{ textAlign: 'left' }} item xs={6}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h2>${(price * cartCount).toFixed(2)}
                        <Button
                            className={classes.countBtn}
                            variant="outlined">
                            <span
                                onClick={() => setCartCount(cartCount - 1)}>
                                -
                        </span>
                            {cartCount}
                            <span
                                className={classes.plusSign}
                                onClick={() => setCartCount(cartCount + 1)}>
                                +
                            </span>
                        </Button>
                    </h2>
                    <Button
                        className={classes.cartBtn}
                        variant="contained"
                        color="secondary"
                    >
                        <AddShoppingCartIcon />
                        Add
                    </Button>

                    <div className={classes.categoryImg}>
                        {
                            slicedTwoItems
                                .map((image, idx) =>
                                    <img
                                        key={idx}
                                        src={image.imgUrl}
                                        alt=""
                                    />)
                        }
                        <ChevronRightIcon style={{marginBottom: '2.5rem'}} />
                    </div>
                </Grid>
                <Grid style={{ textAlign: 'right' }} item xs={6}>
                    <img
                        className={classes.foodImg}
                        src={imgUrl}
                        alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default FoodDetail;
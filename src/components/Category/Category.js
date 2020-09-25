import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import fakeData from '../../fakeData';
import { UserContext } from '../../App';
import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        // flexGrow: 1,
        margin: '0 auto',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    categoryName: {
        '& span': {
            margin: '1.5rem'
        }
    },
    activeCategory: {
        borderBottom: '3px solid red'
    },
}));


const Category = () => {
    const classes = useStyles();
    const { category, food } = useContext(UserContext);
    const [categoryName, setCategoryName] = category;
    const [, setFoodItems] = food;
    const location = useLocation();

    const path = location.pathname;

    const handleCategory = (category) => {
        if (path === '/' || path === '/home') {
            setCategoryName(category);
        } else return false;
        
    }

    useEffect(() => {
        const filteredCategory = fakeData.filter(item => item.category === categoryName)
        setFoodItems(filteredCategory);
    }, [categoryName])

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <h4 className={classes.categoryName}>
                    <span
                        onClick={() => handleCategory('breakfast')}
                        className={categoryName === 'breakfast'
                            ? classes.activeCategory
                            : ''}
                    >
                        Breakfast
                        </span>
                    <span
                        onClick={() => handleCategory('lunch')}
                        className={categoryName === 'lunch'
                            ? classes.activeCategory
                            : ''}
                    >
                        Lunch
                        </span>
                    <span
                        onClick={() => handleCategory('dinner')}
                        className={categoryName === 'dinner'
                            ? classes.activeCategory
                            : ''}
                    >
                        Dinner
                        </span>
                </h4>
            </Grid>
        </div>
    );
};

export default Category;
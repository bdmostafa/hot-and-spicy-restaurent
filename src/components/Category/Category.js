import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import fakeData from '../../fakeData';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        // marginLeft: '0',
        // marginRight: '0',
        margin: '0 auto',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const Category = () => {
    const classes = useStyles();
    const {category, food} = useContext(UserContext);
    const [categoryName, setCategoryName] = category;
    const [, setFoodItems] = food;

    const sixItems = fakeData.slice(0, 6);

    const handleCategory = (category) => {
        setCategoryName(category);
    }
   
    useEffect(() => {
        const filteredCategory = fakeData.filter(item => item.category === categoryName)
        setFoodItems(filteredCategory);
    }, [categoryName])

    // const color = (cName) => {
    //     if (cName === 'breakfast') {
    //         return {
    //             color: 'red',
    //             borderBottom: '3px solid red'
    //         }
    //     }
    //     if (cName === 'lunch') {
    //         return {
    //             color: 'red',
    //             borderBottom: '3px solid red'
    //         }
    //     }
    //     if (cName === 'dinner') {
    //         return {
    //             color: 'red',
    //             borderBottom: '3px solid red'
    //         }
    //     }

    // }

    return (
        <div className={classes.root}>
            <Button onClick={() => handleCategory('breakfast')} >Breakfast</Button>
            <Button onClick={() => handleCategory('lunch')}  >Launch</Button>
            <Button onClick={() => handleCategory('dinner')} >Dinner</Button>
        </div>
    );
};

export default Category;
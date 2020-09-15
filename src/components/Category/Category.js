import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        // marginLeft: '0',
        // marginRight: '0',
        margin: '0 auto',
        '& > *': {
            margin: theme.spacing(1),
        },
        active: {
            borderBottom: '3px solid red'
        }
    },
}));

const Category = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button>Breakfast</Button>
            <Button color="secondary" className={classes.active}>Launch</Button>
            <Button>Dinner</Button>
        </div>
    );
};

export default Category;
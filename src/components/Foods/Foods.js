import React from 'react';
import Category from '../Category/Category';
import FoodsCard from './FoodsCard';
import { Button } from '@material-ui/core';

const Foods = () => {
    return (
        <div>
            <Category />
            <FoodsCard />
            <Button variant="contained" disabled>Checkout Your Food</Button>
        </div>
    );
};

export default Foods;
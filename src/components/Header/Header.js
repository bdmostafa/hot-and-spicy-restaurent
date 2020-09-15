import React from 'react';
import HeaderTop from './HeaderTop'
import { makeStyles, CardMedia } from '@material-ui/core';
import bannerBg from '../../images/bannerbackground.png'

const useStyles = makeStyles(() => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <HeaderTop />
            <CardMedia
                className={classes.media}
                image={bannerBg}
                title="HotAndSpicy"
                >
            </CardMedia>
        </div>
    );
};

export default Header;
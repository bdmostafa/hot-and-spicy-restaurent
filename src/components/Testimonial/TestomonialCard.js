import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import fastDelivery from '../../images/adult-blur-blurred-background-687824.png';
import { Grid } from '@material-ui/core';
import autoResponder from '../../images/chef-cook-food-33614.png'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import homeDelivary from '../../images/architecture-building-city-2047397.png';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flexGrow: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    iconBg: {
        backgroundColor: 'lightgreen',
        borderRadius: '50%',
        color: 'white',
        marginLeft: '5px'
    }
}))

const TestomonialCard = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={fastDelivery}
                        title="Fast Delivery"
                        width="100%"
                    />
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <DirectionsBusIcon />
                            </Avatar>
                        }
                        title="Fast Delivery"
                        subheader="Fast delivery is our motion"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                    </CardContent>
                    <IconButton color="primary" aria-label="share">
                        See More <ArrowRightAltIcon className={classes.iconBg} />
                    </IconButton>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={autoResponder}
                        title="Fast Delivery"
                        width="100%"
                    />
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <NotificationsNoneIcon />
                            </Avatar>
                        }
                        title="A Good Auto Responder"
                        subheader="Fast delivery is our motion"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                    </CardContent>
                    <IconButton color="primary" aria-label="share">
                        See More <ArrowRightAltIcon className={classes.iconBg} />
                    </IconButton>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={homeDelivary}
                        title="Home Delivary"
                        width="100%"
                    />
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <LocalShippingIcon />
                            </Avatar>
                        }
                        title="Home Delivery"
                        subheader="Home delivery is easy to get items"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                    </CardContent>
                    <IconButton color="primary" aria-label="share">
                        See More <ArrowRightAltIcon className={classes.iconBg} />
                    </IconButton>
                </Card>
            </Grid>
        </Grid>

    );
};

export default TestomonialCard;
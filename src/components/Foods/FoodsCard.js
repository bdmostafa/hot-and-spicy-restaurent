import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import launch from './lunch6.png'
import { Grid } from '@material-ui/core';
import { boxShadow } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100vh',
        margin: '0 auto',
        textAlign: 'center',
        flexGrow: 1,
        padding: '2rem',
        hover: {
            "&:hover": {
                boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
            }
        }
    },
    image: {
        width: '75%',
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const FoodsCard = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} sm={4}>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="Contemplative Reptile"
                        width="10"
                        image={launch}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread
                                    </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                            $49.99
                                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="Contemplative Reptile"
                        width="10"
                        image={launch}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread
                                    </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                            $49.99
                                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="Contemplative Reptile"
                        width="10"
                        image={launch}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread
                                    </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                            $49.99
                                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="Contemplative Reptile"
                        width="10"
                        image={launch}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread
                                    </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                            $49.99
                                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="Contemplative Reptile"
                        width="10"
                        image={launch}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread
                                    </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                            $49.99
                                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={4}>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        component="img"
                        alt="Contemplative Reptile"
                        width="10"
                        image={launch}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread
                                    </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                            $49.99
                                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Grid>
        </Grid>
    );
};

export default FoodsCard;

import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

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
    // food state through context API 
    const { food } = useContext(UserContext);
    const [foodItems] = food;
    // Generate 6 item food from randomized data
    const sixItems = foodItems.slice(0, 6)
    
    const history = useHistory();

    const handleDetail = (categoryName, foodId) => {
        history.push(`/foods/${categoryName}/${foodId}`)
    }


    return (
        <Grid container spacing={3} className={classes.root}>
            {
                sixItems.map(item =>
                    <div onClick={() => handleDetail(item.category, item.id)}>
                        <Grid key={item.id} item xs={12} sm={4}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.image}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    width="10"
                                    image={item.imgUrl}
                                    title={item.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h4">
                                        ${item.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                    </div>
                )
            }
        </Grid>
    );
};

export default FoodsCard;

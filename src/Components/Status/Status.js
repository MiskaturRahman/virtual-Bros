import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles();


const Status = (props) => {
    const { id, title, body, userId } = props.post;
    const history = useHistory();
    const handleClick = (statusId) => {
        history.push(`status/${statusId}`)
    }

    const classes = useStyles();


    const theme = createMuiTheme({
        palette: {
            primary: green,
        },
    });
    const style = {
        width: "300px",
        height: "380px",
        margin: "20px 20px",
        border: "1px solid lightgray",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        display: 'inline-block'
    }


    return (

        <Card className={classes.root} style={style}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <b>ID: {id}</b>
                </Typography>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    USERId:{userId}
                </Typography>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            <ThemeProvider theme={theme}>
                <Button style={{ margin: '20px' }} variant="contained" color="primary" className={classes.margin} onClick={() => handleClick(id)}>
                    <b>See More</b>
                </Button>
            </ThemeProvider>
        </Card>

    );
};

export default Status;
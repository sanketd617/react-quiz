import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Link from "@material-ui/core/Link";
import {withRouter} from "react-router-dom";


//classes for styling
const styles = theme => createStyles({
    root: {
        padding: theme.spacing.unit*5,
        height: 0.8*window.innerHeight,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing.unit*2,
        }
    },
    heading: {
        fontFamily: 'Baloo',
        textAlign: 'center',
        color: theme.palette.primary.main,

        [theme.breakpoints.down('sm')]: {
            fontSize: 56,
        }
    },
    question: {
        fontFamily: 'Montserrat',
        textAlign: 'center',
        padding: theme.spacing.unit*4
    },
    button: {
        borderRadius: "50px",
        padding: `${theme.spacing.unit*2}px ${theme.spacing.unit*4}px`
    },
    buttonContainer: {
        textAlign: 'center'
    },
    devInfo: {
        textAlign: 'center',
        padding: theme.spacing.unit*4,
        textDecoration: 'none',
        color: "grey",
        fontFamily: 'Montserrat'
    },
    devName: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontFamily: 'Montserrat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    devDiv: {
        padding: theme.spacing.unit/2
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    }
});

const Home = props => {
    const {classes} = props;
    return (
        <Grid container className={classes.root}>
            {/*hide on medium & smaller screens*/}
            <Hidden mdDown>
                <Grid item lg={3}>
                </Grid>
            </Hidden>

            {/*main content   */}
            <Grid item xs={12} lg={6} className={classes.main}>
                {/*title*/}
                <Typography variant="h1" className={classes.heading}>
                    QuizW!z
                </Typography>
                <div className={classes.question}>

                    {/*question*/}
                    <Typography variant="h4">
                        Can you answer this simple quiz on ReactJS?
                    </Typography>
                </div>
                <div className={classes.buttonContainer}>

                    {/*start quiz button*/}
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        // when clicked view the quiz page
                        onClick={() => props.history.push("/quiz")}
                    >
                        get started
                    </Button>
                </div>

                {/*Developer info*/}
                <div className={classes.devInfo}>
                    <div className={classes.devDiv}>
                        Developed by
                        <a className={classes.link} href="https://www.linkedin.com/in/dsanket/" target="_blank">
                            <Typography variant="h6" color="inherit" className={classes.devName}>
                                Sanket Dahegaonkar
                            </Typography>
                        </a>
                    </div>
                    <div className={classes.devDiv}>
                        <div className={classes.devName}>
                            <Icon>email</Icon> &nbsp; <a className={classes.link} href="mailto:dahegaonkarsanket@gmail.com">dahegaonkarsanket@gmail.com</a>
                        </div>
                    </div>
                    <div className={classes.devName}>
                        <Icon>call</Icon><a href="tel:+918381027904" className={classes.link}>+91 8381027904</a>
                    </div>
                    <div className={classes.devName}>
                        <Icon>call</Icon><a href="tel:+917620971629" className={classes.link}>+91 7620971629</a>
                    </div>
                </div>
            </Grid>

            {/*hide on medium & smaller screens*/}
            <Hidden mdDown>
                <Grid item lg={3}>
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default withRouter(withStyles(styles)(Home));

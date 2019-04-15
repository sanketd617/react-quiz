import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Link from "@material-ui/core/Link";


const styles = theme => createStyles({
    root: {
        border: "1px solid lightgrey",
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
        color: theme.palette.primary.main
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
            <Hidden mdDown>
                <Grid item lg={3}>
                </Grid>
            </Hidden>
            <Grid item sm={12} lg={6} className={classes.main}>
                <Typography variant="h1" className={classes.heading}>
                    QuizW!z
                </Typography>
                <div className={classes.question}>
                    <Typography variant="h4">
                        Can you answer this simple quiz on ReactJS?
                    </Typography>
                </div>
                <div className={classes.buttonContainer}>
                    <Link href="/quiz">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            get started
                        </Button>
                    </Link>
                </div>
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
                        <span className={classes.devName}>
                            <Icon>email</Icon> &nbsp; dahegaonkarsanket@gmail.com
                        </span>
                    </div>
                    <div className={classes.devName}>
                        <Icon>call</Icon> &nbsp; <a href="tel:+918381027904" className={classes.link}>+91 8381027904</a> &nbsp; / &nbsp; <a href="tel:+917620971629" className={classes.link}>+91 7620971629</a>
                    </div>
                </div>
            </Grid>
            <Hidden mdDown>
                <Grid item lg={3}>
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default withStyles(styles)(Home);

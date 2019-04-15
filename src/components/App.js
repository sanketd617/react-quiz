import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => createStyles({
    root: {
        border: "1px solid lightgrey",
        padding: theme.spacing.unit*5
    },
    heading: {
        fontFamily: 'Baloo',
        textAlign: 'center',
        color: theme.palette.primary.main
    },
    main: {

    }
});

const App = (props) => {
    const { classes } = props;
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
            </Grid>
            <Hidden mdDown>
                <Grid item lg={3}>
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default withStyles(styles)(App);

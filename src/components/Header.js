import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => createStyles({
    heading: {
        color: theme.palette.primary.main,
        fontFamily: 'Baloo'
    }
});

const Header = props => {
    const {classes} = props;
    return (

        <AppBar position="static" color="default" elevation={1}>
            <Grid container>
                <Hidden mdDown>
                    <Grid item lg={3}>
                    </Grid>
                </Hidden>
                <Grid item xs={12} lg={6}>
                    <Toolbar>
                        <Typography variant="h4" color="inherit" className={classes.heading}>
                            QuizWiz
                        </Typography>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default withStyles(styles)(Header);

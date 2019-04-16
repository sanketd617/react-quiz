import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import TouchRipple from '@material-ui/core/ButtonBase';

const styles = theme => createStyles({
    option: {
        padding: theme.spacing.unit,
        margin: theme.spacing.unit,
        boxShadow: '0px 1px 2px lightgrey, 0px -1px 2px lightgrey',
        textAlign: 'left',
        borderRadius: '50px',
        display: 'inline-block',
        width: `calc(50% - ${theme.spacing.unit*4}px)`,
        fontSize: 24,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            width: `calc(100% - ${theme.spacing.unit*2}px)`,
        }
    },
    main: {
        display: 'flex',
        alignItems: 'center'
    },
    key: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit*1.7}px`,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit*1.3}px`,
        }
    },
    value: {
        paddingLeft: theme.spacing.unit
    }
});

const keys = ["A", "B", "C", "D"];

const Option = props => {
    const {classes} = props;
    return (
        <TouchRipple className={classes.option}>
            <div className={classes.main}>
                <div className={classes.key}>
                    { keys[props.index] }
                </div>
                <div className={classes.value}>
                    { props.option }
                </div>
            </div>
        </TouchRipple>
    );
};

export default withStyles(styles)(Option);

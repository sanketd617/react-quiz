import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import TouchRipple from '@material-ui/core/ButtonBase';
import Zoom from "@material-ui/core/Zoom";

//classes for styling
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
    activeOption: {
        background: theme.palette.primary.light
    },
    main: {
        display: 'flex',
        alignItems: 'center'
    },
    key: {
        position: 'absolute',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit*1.7}px`,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit*1.3}px`,
        }
    },
    activeKey: {
        backgroundColor: theme.palette.primary.main,
        color: "white"
    },
    value: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit*1.7}px`,
        paddingLeft: theme.spacing.unit*7,
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing.unit}px ${theme.spacing.unit*1.3}px`,
            paddingLeft: theme.spacing.unit*5,
        }
    }
});

//option key
const keys = ["A", "B", "C", "D"];

const Option = props => {
    const {classes} = props;
    return (

        // Wrapper for waves effect
        <TouchRipple className={classes.option+" "+(props.active ? classes.activeOption : "")} onClick={() => props.onResponse(props.qn, props.index)}>
            <div className={classes.main}>

                {/*Zoom in/out animation wrapper for selected option*/}
                <Zoom
                    in={props.active}
                    timeout={300}
                    style={{transitionDelay: !props.active ? 0 : 300}}
                    unmountOnExit
                >
                    {/*Option*/}
                    <div className={classes.key+" "+classes.activeKey}>
                        { keys[props.index] }
                    </div>
                </Zoom>
                {/*Zoom in/out animation wrapper for unselected option*/}
                <Zoom
                    in={!props.active}
                    timeout={300}
                    style={{transitionDelay: props.active ? 0 : 300}}
                    unmountOnExit
                >
                    {/*Option*/}
                    <div className={classes.key}>
                        { keys[props.index] }
                    </div>
                </Zoom>
                <div className={classes.value}>
                    {/*Option value*/}
                    { props.option }
                </div>
            </div>
        </TouchRipple>
    );
};

export default withStyles(styles)(Option);

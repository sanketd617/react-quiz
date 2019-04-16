import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Typography from "@material-ui/core/Typography";
import Option from "./Option";

const styles = theme => createStyles({
    question: {
        textAlign: 'center',
    },
    text: {
        fontSize: 48,
        fontWeight: '500',
        fontFamily: 'Montserrat',
        padding: theme.spacing.unit*4,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        }
    }
});

const Question = props => {
    const {classes} = props;
    return (
        <div>
            <div className={classes.question}>
                <Typography variant="h5" className={classes.text}>
                    { props.question.que }
                </Typography>

                {
                    props.question.options.map((option, index) => {
                        return <Option index={index} key={"option"+index} option={option} />
                    })
                }
            </div>
        </div>
    );
};

export default withStyles(styles)(Question);

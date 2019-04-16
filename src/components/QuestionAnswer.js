import React, {Fragment} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

const styles = theme => createStyles({
    root: {
        fontFamily: 'Montserrat',
        padding: `${theme.spacing.unit*2}px 0`
    },
    correctIcon: {
        color: "green"
    },
    wrongIcon: {
        color: "red"
    },
    withPadding: {
        padding: `${theme.spacing.unit}px 0`
    }
});

const QuestionAnswer = props => {
    const {classes} = props;
    return (
        // empty container
        <Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={1}>
                    {/*question number*/}
                    { props.index+1 }.
                </Grid>

                <Grid item xs={11}>
                    <Grid item xs={12}>
                        {/*question*/}
                        { props.question.que }
                    </Grid>
                    <Grid container className={classes.withPadding}>
                        <Grid item xs={1}>
                            {/*icon to indicate the correctness of response*/}
                            <Icon fontSize="small" className={props.question.ans === props.question.response ? classes.correctIcon : classes.wrongIcon }>
                                {props.question.ans === props.question.response ? "done" : "close" }
                            </Icon>
                        </Grid>
                        <Grid item xs={11}>
                            {/*response*/}
                            { props.question.options[props.question.response] }
                        </Grid>
                        {
                            // hide if response is correct, to prevent redundancy
                            props.question.ans !== props.question.response ?
                                <div className={classes.withPadding}>
                                    <Grid item xs={1}>
                                        {/*icon to indicate correct answer*/}
                                        <Icon fontSize="small" className={classes.correctIcon}>
                                            done
                                        </Icon>
                                    </Grid>
                                    <Grid item xs={11}>
                                        {/*correct answer*/}
                                        { props.question.options[props.question.ans] }
                                    </Grid>
                                </div> : ""
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
        </Fragment>
    );
};

export default withStyles(styles)(QuestionAnswer);

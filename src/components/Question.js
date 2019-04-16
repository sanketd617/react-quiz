import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Typography from "@material-ui/core/Typography";
import Option from "./Option";


//classes for styling
const styles = theme => createStyles({
    question: {
        textAlign: 'center',
        transitionDuration: 300,
        height: window.innerHeight*0.5,
        [theme.breakpoints.down('sm')]: {
            height: window.innerHeight*0.7,
        }
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
        <div className={classes.question} style={{transform: `translateY(${-props.qn*100}%) translateX(${(props.qn-props.cqn+((props.qn-props.cqn) > 0 ? 0.1 : (props.qn-props.cqn) < 0 ? -0.1 : 0))*100}%)`}}>
            {/*Main question*/}
            <Typography variant="h5" className={classes.text}>
                { props.question.que }
            </Typography>

            {/*Creating options*/}
            {
                props.question.options.map((option, index) => {
                    return <Option
                        index={index}
                        qn={props.qn}
                        key={"option"+index}
                        option={option}
                        active={props.question.response === index}
                        onResponse={props.onResponse}/>
                })
            }
        </div>
    );
};

export default withStyles(styles)(Question);

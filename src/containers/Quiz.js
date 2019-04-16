import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Header from "../components/Header";
import {connect} from "react-redux";
import Question from "../components/Question";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {changeQuestion, respond} from "../actions/QuizActions";
import {withRouter} from "react-router-dom";


//classes for styling
const styles = theme => createStyles({
    main: {
        padding: theme.spacing.unit*3,
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing.unit*2}px 0`,
        }
    },
    header: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing.unit*2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing.unit*2}px ${theme.spacing.unit}px`,
        }
    },
    avatar: {
        margin: `0 ${theme.spacing.unit}px`,
        transitionDuration: 300,
        transform: 'scale(0.8)',
        [theme.breakpoints.down('sm')]: {
            margin: `0 ${theme.spacing.unit/3}px`
        }
    },
    activeAvatar: {
        backgroundColor: "white",
        transform: 'scale(1)',
        color: theme.palette.primary.main
    },
    btn: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: "white"
        },
        '&:disabled': {
            backgroundColor: "lightgrey",
            color: "grey"
        }
    },
    cardContent: {
        height: window.innerHeight*0.7,
        [theme.breakpoints.down('sm')]: {
            height: window.innerHeight*0.7,
        }
    }
});

class Quiz extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Header/>
                </Grid>
                <Hidden mdDown>
                    <Grid item lg={3}>
                    </Grid>
                </Hidden>
                <Grid item xs={12} lg={6} className={classes.main}>
                    {/*card*/}
                    <Card className={classes.card}>
                        <div className={classes.header}>

                            {/*create question indicators*/}
                            {
                                this.props.questions.map((question, index) => {
                                    return <Avatar key={index} className={classes.avatar+" "+(this.props.currentQuestion === index? classes.activeAvatar : "")}>
                                        { index+1 }
                                    </Avatar>
                                })
                            }
                        </div>
                        <CardContent className={classes.cardContent}>
                            {/*create question component*/}
                            {
                                this.props.questions.map((question, index) => {
                                    return (
                                        <Question key={"question"+index} cqn={this.props.currentQuestion} qn={index} question={question} onResponse={this.props.respond}/>
                                    )
                                })
                            }
                        </CardContent>

                        {/*action buttons (prev & next question trigger)*/}
                        <CardActions className={classes.actions}>
                            <IconButton
                                className={classes.btn}
                                // disable when 1st question is the current question
                                disabled={this.props.currentQuestion === 0}
                                //switch to prev question
                                onClick={() => this.props.currentQuestion > 0 ? this.props.changeQuestion(this.props.currentQuestion-1) : null }
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                            <IconButton
                                className={classes.btn}
                                // disable when no response is given
                                disabled={this.props.questions[this.props.currentQuestion].response == null}
                                onClick={() => {
                                    if(this.props.currentQuestion < this.props.questions.length - 1){
                                        //switch to next question
                                        this.props.changeQuestion(this.props.currentQuestion+1);
                                    }
                                    else{
                                        //display result if all questions are attempted
                                        this.props.history.push("/result")
                                    }
                                }}
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Hidden mdDown>
                    <Grid item lg={3}>
                    </Grid>
                </Hidden>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.quiz.questions, // all questions
        currentQuestion: state.quiz.currentQuestion // current question number
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        respond: (qn, response) => {
            dispatch(respond({ qn, response })) //handle response
        },
        changeQuestion: qn => {
            dispatch(changeQuestion(qn)); //navigate to next or previous question
        }
    };
};

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Quiz)));

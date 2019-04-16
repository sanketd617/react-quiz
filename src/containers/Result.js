import React from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import {createStyles, withStyles} from "@material-ui/core";
import Header from "../components/Header";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import QuestionAnswer from "../components/QuestionAnswer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";
import {reset} from "../actions/QuizActions";

//classes for styling
const styles = theme => createStyles({
    main: {
        paddingTop: theme.spacing.unit*4
    },
    circleContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    progressBackground: {
        position: 'absolute'
    },
    circleContent: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        height: window.innerWidth*0.7 > 400 ? 400 : window.innerWidth*0.7,
        '& > div': {
            textAlign: 'center'
        }
    },
    questionsContainer: {
        padding: theme.spacing.unit*2,
        paddingTop: theme.spacing.unit*4
    },
    btnContainer: {
        padding: 5
    }
});

class Result extends React.Component {

    //check if all questions are answered
    checkIfAnswered(questions){
        for(let i=0; i<questions.length; i++){
            if(questions[i].response == null)
                return false;
        }
        return true;
    }

    render() {

        //if all questions are not answered redirect to 1st question
        if(!this.checkIfAnswered(this.props.questions)){
            this.props.history.replace("/quiz")
        }

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
                    <div className={classes.circleContainer}>
                        {/*//circular stats*/}
                        <CircularProgress
                            className={classes.progressBackground}
                            variant="static"
                            value={100}
                            //calculate size of circle
                            size={window.innerWidth*0.7 > 400 ? 400 : window.innerWidth*0.7}
                            color={"secondary"}
                        />
                        <CircularProgress
                            className={classes.progress}
                            variant="static"
                            //calculate percentage of correct responses
                            value={(this.props.totalCorrect/this.props.questions.length)*100}
                            //calculate size of circle
                            size={window.innerWidth*0.7 > 400 ? 400 : window.innerWidth*0.7}
                        />
                        <div className={classes.circleContent}>
                            <div>
                                <Typography variant="h2" color="primary">
                                    {/*percentage*/}
                                    { ((this.props.totalCorrect/this.props.questions.length)*100).toFixed(1) }%
                                </Typography>
                                <Typography variant="h4" color="secondary">
                                    {/*no. of correct response out of total*/}
                                    { this.props.totalCorrect } / { this.props.questions.length }
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={classes.questionsContainer}>
                        <Divider/>
                        {/*create questions with answer*/}
                        {
                            this.props.questions.map((question, index) => {
                                return <QuestionAnswer index={index} key={"questionAnswer"+index} question={question}/>
                            })
                        }
                    </div>
                    <div>
                        <div>
                            <Grid container>
                                <Grid className={classes.btnContainer} item xs={6} md={2} lg={1}>
                                    {/*button to navigate to the home page*/}
                                    <Button onClick={() => { this.props.reset(); this.props.history.push(""); } } fullWidth variant="contained" color="primary" className={classes.button}>
                                        Home
                                    </Button>
                                </Grid>
                                <Grid className={classes.btnContainer} item xs={6} md={2} lg={1}>
                                    {/*button to restart the quiz*/}
                                    <Button onClick={() => { this.props.reset(); this.props.history.push("quiz"); } } fullWidth variant="contained" color="primary" className={classes.button}>
                                        Retry
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </div>
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
        questions: state.quiz.questions, //all questions
        totalCorrect: state.quiz.totalCorrect //total number of correct questions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch(reset()) //reset all the attempts and start from beginning
        }
    };
};

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Result)));

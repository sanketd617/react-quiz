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
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {changeQuestion, respond} from "../actions/QuizActions";

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
        [theme.breakpoints.down('sm')]: {
            margin: `0 ${theme.spacing.unit/3}px`
        }
    },
    activeAvatar: {
        backgroundColor: "white",
        color: theme.palette.primary.main
    },
    backBtn: {
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
    nextBtn: {
        color: theme.palette.primary.main
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
                <Grid item sm={12} lg={6} className={classes.main}>
                    <Card className={classes.card}>
                        <div className={classes.header}>
                            {
                                this.props.questions.map((question, index) => {
                                    return <Avatar key={index} className={classes.avatar+" "+(this.props.currentQuestion === index? classes.activeAvatar : "")}>
                                        { index+1 }
                                    </Avatar>
                                })
                            }
                        </div>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Question question={this.props.questions[0]} onResponse={this.props.respond}/>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton className={classes.backBtn} disabled={this.props.currentQuestion === 0}>
                                <ChevronLeftIcon />
                            </IconButton>
                            <IconButton
                                className={classes.nextBtn}
                                disabled={this.props.questions[this.props.currentQuestion].response == null}
                                onClick={() => this.props.currentQuestion < this.props.questions.length - 1? this.props.changeQuestion(this.props.currentQuestion+1) : console.log("submit")}
                            >
                                <small><small>Next</small></small> <ChevronRightIcon />
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
        questions: state.quiz.questions,
        currentQuestion: state.quiz.currentQuestion
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        respond: (qn, response) => {
            dispatch(respond({ qn, response }))
        },
        changeQuestion: qn => {
            dispatch(changeQuestion(qn));
        }
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Quiz));

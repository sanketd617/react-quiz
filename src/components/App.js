import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import Quiz from "../containers/Quiz";


const styles = theme => createStyles({

});

const FZF = (props) => {
    return (
        <div>
            404
        </div>
    )
};

const App = (props) => {
    const { classes } = props;
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Home}/>
                <Route path="/quiz" component={Quiz}/>
            </BrowserRouter>
        </div>
    );
};

export default withStyles(styles)(App);

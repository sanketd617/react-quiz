import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import Quiz from "../containers/Quiz";
import Result from "../containers/Result";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";


const styles = theme => createStyles({

});

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: "#c5cae9"
        }
    }
});

const App = (props) => {
    const { classes } = props;
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Home}/>
                    <Route path="/quiz" component={Quiz}/>
                    <Route path="/result" component={Result}/>
                </BrowserRouter>
            </div>
        </MuiThemeProvider>
    );
};

export default withStyles(styles)(App);

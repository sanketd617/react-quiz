import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import Quiz from "../containers/Quiz";
import Result from "../containers/Result";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//create classes if required
const styles = theme => createStyles({

});

//create a custom theme, make changes to default theme here
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
        // Wrapper for theme
        <MuiThemeProvider theme={theme}>
            <div>
                {/*Wrapper for router*/}
                <BrowserRouter basename='react-quiz'>
                    {/*Display Home component when / is matched*/}
                    <Route path="/" exact component={Home}/>


                    {/*Display Quiz component when /quiz is matched*/}
                    <Route path="/quiz" component={Quiz}/>

                    {/*Display Result component when /result is matched*/}
                    <Route path="/result" component={Result}/>

                </BrowserRouter>
            </div>
        </MuiThemeProvider>
    );
};

export default withStyles(styles)(App);

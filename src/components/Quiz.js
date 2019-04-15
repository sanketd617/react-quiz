import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = theme => createStyles({});

const Quiz = props => {
    const {classes} = props;
    return (
        <div>
            Hello
        </div>
    );
};

export default withStyles(styles)(Quiz);

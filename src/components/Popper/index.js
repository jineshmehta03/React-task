import React from "react";
import Popper from "@material-ui/core/Popper";
import { Divider, Fade, Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const PopperComp = ({ open, anchorEl, classes }) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="top-start"
      transition
      className={classes.popper}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper className={classes.paper}>
            <Box className={classes.popperCard}>
              <Avatar variant="square" className={classes.popperAvatar}>
                E
              </Avatar>
              <Box style={{ padding: "0 5%" }}>
                <Typography>ET</Typography>
                <Typography
                  style={{
                    color: "grey",
                    fontSize: "0.75rem",
                  }}
                >
                  Switch workplace
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box style={{ padding: "7% 0" }}>
              <Typography className={classes.popperText}>Team</Typography>
              <Typography className={classes.popperText}>Billing</Typography>
              <Typography className={classes.popperText}>Settings</Typography>
            </Box>
            <Divider />
            <Box className={classes.popperCard}>
              <Avatar className={classes.popperAvatar}>K</Avatar>
              <Box style={{ padding: "0 5%" }}>
                <Typography>Kishan Thobhani</Typography>
                <Typography
                  style={{
                    color: "grey",
                    fontSize: "0.75rem",
                  }}
                >
                  thobhanikishan@gmail.c...
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className={classes.popperText}>Account</Typography>
              <Typography className={classes.popperText}>Signout</Typography>
            </Box>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default PopperComp;

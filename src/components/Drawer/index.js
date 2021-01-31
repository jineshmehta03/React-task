import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import PopperComp from "../Popper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 200,
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-end",
    height: "100vh",
    backgroundColor: "#05006F",
  },
  fullList: {
    width: "auto",
  },
  card: {
    backgroundColor: "#07035B",
    display: "flex",
    padding: "3% 3%",
    cursor: "pointer",
  },
  popperCard: {
    display: "flex",
    padding: "7% 3%",
  },
  avatar: {
    backgroundColor: "blue",
    color: "skyblue",
  },
  popperAvatar: {
    backgroundColor: "lightgrey",
    color: "blue",
  },
  badge: {
    "& .MuiBadge-anchorOriginBottomRightRectangle": {
      bottom: "20% !important",
      right: "10%",
    },
    "& .MuiBadge-colorSecondary": {
      backgroundColor: "green",
    },
  },
  popper: {
    zIndex: 99999,
    top: "3% !important",
  },
  paper: {
    padding: "3%",
    width: 250,
  },
  popperText: {
    fontWeight: "bold",
    fontSize: "0.875rem",
    padding: "2%",
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handlePopper = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const list = () => (
    <div className={classes.list} role="presentation">
      <Box onClick={handlePopper} className={classes.card}>
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          className={classes.badge}
          color="secondary"
          variant="dot"
        >
          <Avatar className={classes.avatar}>E</Avatar>
        </Badge>
        <Box style={{ padding: "0 5%" }}>
          <Typography style={{ color: "#fff", textAlign: "left" }}>
            ET
          </Typography>
          <Typography style={{ color: "grey", fontSize: "0.75rem" }}>
            theobhanikishan@q...
          </Typography>
        </Box>
      </Box>
    </div>
  );

  return (
    <div>
      <Drawer open variant="permanent" anchor="left">
        {list()}
      </Drawer>
      <PopperComp open={open} anchorEl={anchorEl} classes={classes} />
    </div>
  );
}

import React from "react";
import classes from "./Header.module.scss";
import Avatar from "@mui/material/Avatar";

export default function Header() {
  return (
    <div className={classes.wrapper}>
      <Avatar sx={{ width: 30, height: 30 }}>H</Avatar>
      <p>Guest</p>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom";
import logo from "./../static/png/logo.png";
import classes from "./RouterBreadcrumbs.module.scss";

interface ListItemLinkProps extends ListItemProps {
  to: string;
  open?: boolean;
}

export const breadcrumbNameMap: { [key: string]: string } = {
  "/CMDB": "CMDB",
  "/CMDB/server": "Серверы и ПК",
  "/CMDB/gipervisor": "Гипервизоры и вирт.машины",
  "/CMDB/printer": "Принтеры и МФУ",
  "/CMDB/newtork": "Сетевые устройства",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts",
};

function ListItemLink(props: ListItemLinkProps) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItem button component={RouterLink as any} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          mt: 1,
          width: 200,
        }}
        component="nav"
        aria-label="mailbox folders"
      >
        <img src={logo} alt="U-sustem" className={classes.logo} />
        <List>
          <ListItemLink to="/CMDB" open={open} onClick={handleClick} />
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/CMDB/server" />
              <ListItemLink sx={{ pl: 4 }} to="/CMDB/gipervisor" />
              <ListItemLink sx={{ pl: 4 }} to="/CMDB/printer" />
              <ListItemLink sx={{ pl: 4 }} to="/CMDB/newtork" />
            </List>
          </Collapse>
          <ListItemLink to="/trash" />
          <ListItemLink to="/spam" />
        </List>
      </Box>
    </div>
  );
}

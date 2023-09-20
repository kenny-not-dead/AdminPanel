import * as React from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate, useLocation } from "react-router-dom";

interface propsType {
  type: String;
  tag: String;
}

export default function FilterDropdown(props: propsType) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [type, setType] = React.useState("");
  const [tag, setTag] = React.useState("");

  React.useEffect(() => {
    if (props.type.length > 0) {
      setType(props.type.toString());
    } else if (props.tag.length > 0) {
      setTag(props.tag.toString());
    }
  }, [props.type, props.tag]);

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleChangeTag = (event: SelectChangeEvent) => {
    setTag(event.target.value as string);
  };

  const tags = ["red", "blue", "yellow", "black", "green", "orange"];

  const clearFilter = () => {
    setType("");
    setTag("");
    if (location.search.length > 0) {
      navigate(`${location.pathname}`);
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  const onFilter = () => {
    const newpath = location.pathname;
    let secondFilter = `${type ? `type=${type}` : ""}${type && tag ? "&" : ""}${
      tag ? `tag=${tag}` : ""
    }`;

    if (location.search.length > 0) {
      let searchpath = location.search;
      navigate(`${newpath}${searchpath}?${secondFilter}`);
    } else {
      navigate(`${newpath}?${secondFilter}`);
    }
  };

  return (
    <div>
      <Tooltip title="Filter list">
        <IconButton onClick={handleClick}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            <h2>Фильтры</h2>
            <CloseIcon onClick={handleClose} />
          </Box>
          <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Тип ПК</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Тип ПК"
                onChange={handleChange}
              >
                <MenuItem value={"Server"}>Server</MenuItem>
                <MenuItem value={"PC"}>PC</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 250, marginTop: 3, marginBottom: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Теги</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tag}
                label="Теги"
                onChange={handleChangeTag}
              >
                {tags.map((i) => (
                  <MenuItem sx={{ color: `${i}` }} value={i}>
                    {i} tag
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            paddingX: 2,
            paddingBottom: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={onFilter}>
            Применить
          </Button>
          <Button variant="outlined" onClick={clearFilter}>
            Сбросить
          </Button>
        </Box>
      </Menu>
    </div>
  );
}

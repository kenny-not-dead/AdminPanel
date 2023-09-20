import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function TagSelectFilter() {
  const [type, setType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const tag = ["red", "blue", "yellow", "black", "green", "orange"];

  return (
    <Box sx={{ minWidth: 250, marginTop: 3, marginBottom: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Теги</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Теги"
          onChange={handleChange}
        >
          {tag.map((i) => (
            <MenuItem sx={{ color: `${i}` }} value={i}>
              {i} tag
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

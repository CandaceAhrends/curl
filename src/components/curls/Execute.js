import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Execute = ({ resource }) => {
  const handleChange = () => {};
  const content = resource.read();
  return (
    <>
      <FormControl>
        <TextField
          className="curl-form-textarea"
          value={JSON.stringify(content)}
          label="Data"
          multiline
          rows="10"
          cols="250"
        />
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">User Data</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Environment"
          onChange={handleChange}
        >
          <MenuItem value={10}>UNIQUEID</MenuItem>
          <MenuItem value={20}>INT</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div>
        <Button>Add User to Data</Button>
        <Button>Execute</Button>
        <Button>Save User Data</Button>
      </div>
    </>
  );
};

export default Execute;

import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const FilterForm = ({ handleSearch }) => {
  const [query, setQuery] = React.useState({ search: "" });

  const handleQueryChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };
  const handleSearchClick = () => {
    handleSearch(query);
  };

  return (
    <>
      <FormControl>
        <TextField
          name="search"
          className="curl-form-textarea"
          label="Curl Command"
          value={query.search}
          onChange={handleQueryChange}
        />
      </FormControl>
      {/* <FormControl>
        <InputLabel>Environment</InputLabel>
        <Select
          name="env"
          value={query.env}
          label="Environment"
          onChange={handleQueryChange}
        >
          <MenuItem value={"all"}>ALL</MenuItem>
          <MenuItem value={"qa"}>QA</MenuItem>
          <MenuItem value={"int"}>INT</MenuItem>
          <MenuItem value={"prod"}>PROD</MenuItem>
        </Select>
      </FormControl> */}
      <div>
        <Button onClick={handleSearchClick}>Search</Button>
      </div>
    </>
  );
};

export default FilterForm;

import React from "react";
import TextField from "@mui/material/TextField";

const DataInputForm = ({ dataResource, handleCurlDataChange }) => {
  const loadedData = dataResource ? dataResource.read() : { content: "" };

  const [data, setData] = React.useState("");

  React.useEffect(() => {
    setData(loadedData.content);
    handleCurlDataChange(loadedData.content);
  }, [dataResource]);

  const handleDataChange = (evt) => {
    setData(evt.target.value);
    handleCurlDataChange(evt.target.value);
  };
  return (
    <div>
      <TextField
        value={data}
        className="curl-form-textarea"
        label="Data"
        multiline
        rows="10"
        cols="250"
        onChange={handleDataChange}
      />
    </div>
  );
};

export default DataInputForm;

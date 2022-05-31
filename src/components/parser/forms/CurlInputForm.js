import React, { Suspense } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { saveDataRequest, saveCurlRequest } from "../../actions";
import CurlActions from "./CurlActions";
import DataInputForm from "./DataInputForm";
import { postData } from "../../../api/suspenseFetch";
import { parse } from "../parser";
import "./form.scss";

const fetchSavedData = (fileName) =>
  postData("http://localhost:5000/read/data", { fileName });

const CurlInputForm = ({ curlResource, listResource, handleParsedCurl }) => {
  const loadedCurl = curlResource ? curlResource.read() : { content: "" };
  const dataList = listResource.read();
  const [curl, setCurl] = React.useState(loadedCurl.content);
  const [dataResource, setDataResource] = React.useState(null);
  const [saveAs, setSaveAs] = React.useState("");
  const [selectedData, setSelectedData] = React.useState(0);
  const [data, setData] = React.useState("");
  const [curlData, setCurlData] = React.useState({});

  const parseCurlCommand = () => {
    const parsedCurl = parse({ curl, data });
    console.log(parsedCurl);
    setCurlData(parsedCurl);
    handleParsedCurl(parsedCurl);
  };

  const loadData = () => {
    setDataResource(fetchSavedData(selectedData));
  };
  const handleSaveAsChange = (evt) => {
    setSaveAs(evt.target.value);
  };
  const saveData = async () => {
    const dataSaved = await saveDataRequest({
      data,
      fileName: saveAs,
    });
  };
  const handleDataChange = (assignedData) => {
    setData(assignedData);
  };
  return (
    <div className="curl-form form-container">
      <section className="form-container-section">
        <TextField
          value={curl}
          className="curl-form-textarea"
          label="Curl Command"
          multiline
          rows="10"
          cols="250"
          onChange={(e) => setCurl(e.target.value)}
        />
        <CurlActions
          curlData={curlData}
          parseCurlCommand={parseCurlCommand}
        ></CurlActions>
      </section>
      <section className="data-form form-container-section">
        <div style={{ width: "100%" }}>
          <Suspense fallback={"Loading..."}>
            <div style={{ width: "100%" }}>
              <DataInputForm
                dataResource={dataResource}
                handleCurlDataChange={handleDataChange}
              ></DataInputForm>
            </div>
          </Suspense>
          <div>
            <TextField
              name="name"
              className="curl-form-textarea"
              label="Data Name"
              value={saveAs}
              onChange={handleSaveAsChange}
            />

            <Button onClick={() => saveData()}>Save</Button>
          </div>
        </div>
      </section>
      <section>
        <InputLabel>Load Data</InputLabel>
        <Select
          name="env"
          value={selectedData}
          label="Load Data"
          onChange={(e) => setSelectedData(e.target.value)}
        >
          <MenuItem key={0} value={0}>
            Select Data to Load
          </MenuItem>
          {dataList.list.map((listItem) => (
            <MenuItem key={listItem} value={listItem}>
              {listItem}
            </MenuItem>
          ))}
        </Select>

        <Button onClick={loadData}>Load</Button>
      </section>
    </div>
  );
};

export default CurlInputForm;

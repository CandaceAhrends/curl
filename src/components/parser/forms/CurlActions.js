import React from "react";
import { saveCurlRequest } from "../../actions";
import { Button } from "@mui/material";

const CurlActions = ({ curlData, parseCurlCommand }) => {
  const [message, setMessage] = React.useState("");
  const saveCurlCommand = async () => {
    const postData = {
      fileName: curlData.name,
      data: curlData.content,
    };
    try {
      const response = await saveCurlRequest(postData);
      setMessage("Saved as " + response.data.savedAs);
    } catch (err) {
      setMessage(JSON.stringify(err.message));
    }
  };

  return (
    <div className="actions">
      <p>{message}</p>
      <Button className="curl-form-parse-btn" onClick={saveCurlCommand}>
        Save Curl
      </Button>
      <Button className="curl-form-parse-btn" onClick={parseCurlCommand}>
        Parse Curl
      </Button>
    </div>
  );
};

export default CurlActions;

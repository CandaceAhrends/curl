import React from "react";
import ActionCard from "../common/ActionCard";
import { testCurlRequest } from "../actions";

const exeActions = [{ name: "Test Command", id: "test" }];

const TabResults = ({ curlData: { name, generated, content } }) => {
  const [message, setMessage] = React.useState("");

  const handleAction = async (id) => {
    if (id === "test") {
      const postData = {
        curlcmd: generated,
      };
      try {
        const response = await testCurlRequest(postData);
        setMessage("Result" + JSON.stringify(response.data));
      } catch (err) {
        setMessage(JSON.stringify(err.message));
      }
    }
  };

  return (
    <>
      <ActionCard
        title={name}
        body={message}
        actions={exeActions}
        triggerAction={handleAction}
      >
        <div style={{ whiteSpace: "pre" }}>{generated}</div>
      </ActionCard>
    </>
  );
};

export default TabResults;

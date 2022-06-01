import React, { Suspense } from "react";
import CurlInputForm from "./forms/CurlInputForm";
import { useParams } from "react-router";
import { postData, fetchData } from "../../api/suspenseFetch";
import ErrorFallback from "../common/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import TabResults from "./TabResults";

import "./index.scss";

const fetchCurl = (fileName) =>
  fetchData(`http://localhost:5000/curls/${fileName}`);

const fetchDataList = () => fetchData("http://localhost:5000/data");

export default () => {
  const { id } = useParams();
  const [curlData, setCurlData] = React.useState({});
  const handleParsedCurl = (data) => {
    setCurlData(data);
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="container">
        <Suspense fallback={"Loading..."}>
          <CurlInputForm
            curlResource={id ? fetchCurl(id) : null}
            listResource={fetchDataList()}
            handleParsedCurl={handleParsedCurl}
          ></CurlInputForm>
        </Suspense>
        <TabResults curlData={curlData}></TabResults>
      </div>
    </ErrorBoundary>
  );
};

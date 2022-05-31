import React, { Suspense } from "react";
import FilterForm from "./FilterForm";
import List from "./List";
//import Execute from "./Execute";
import { postData, fetchData } from "../../api/suspenseFetch";
import { ErrorBoundary } from "react-error-boundary";
import "./index.scss";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
const fetchCurl = (fileName) =>
  postData("http://localhost:5000/read", { fileName });
const getListResource = () => {
  return fetchData("http://localhost:5000/list");
};
export default () => {
  // const [fileName, setFileName] = React.useState("");
  const [query, setQuery] = React.useState({ search: "" });

  const handleSearch = (formQuery) => {
    setQuery({ ...formQuery });
  };
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={"Loading..."}>
          <FilterForm handleSearch={handleSearch}></FilterForm>
          <List resource={getListResource()} query={query}></List>
          {/* {fileName.length ? (
            <Execute resource={fetchCurl(fileName)}></Execute>
          ) : null} */}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

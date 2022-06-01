import React, { Suspense } from "react";
import FilterForm from "./FilterForm";
import List from "./List";

import { fetchData } from "../../api/suspenseFetch";
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

const getListResource = () => {
  return fetchData("http://localhost:5000/curls");
};
export default () => {
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
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

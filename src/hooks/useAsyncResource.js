import React from "react";

const useAsyncResurce = (resource) => {
  const load = (data) => {
    return resource(data);
  };
  return [load];
};

export default useAsyncResurce;

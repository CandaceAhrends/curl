import axios from "axios";
import { transformers } from "./transformers";
const wrapPromise = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success"; //"http://localhost:5000/list"
      const url = res?.config?.url;
      if (/\/curls$/.test(url)) {
        console.log("url has list ..>>>>", url, res.data);
        if (res.data.list) response = transformers["list"](res.data);
      } else {
        response = res.data;
      }
    },
    (err) => {
      status = "error";
      response = err;
    }
  );
  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };
  return { read };
};

export const fetchData = (url) => {
  const promise = axios.get(url);

  return wrapPromise(promise);
};
export const postData = (url, body) => {
  return wrapPromise(axios.post(url, body));
};

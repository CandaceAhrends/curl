import axios from "axios";
const host = "http://localhost:5000";
const saveUrl = `${host}/save`;
const listUrl = `${host}/list`;
const testUrl = `${host}/curl`;
const saveDataUrl = `${saveUrl}/data`;

export const saveCurlRequest = async (data) => {
  return axios.post(saveUrl, data);
};
export const saveDataRequest = async (data) => {
  return axios.post(saveDataUrl, data);
};
export const testCurlRequest = async (data) => {
  const curlData = data.curlcmd.join(" ").replace("\n", "");
  console.log("curl data >>>", curlData);
  return axios.post(testUrl, { curlcmd: curlData });
};
export const listCurlRequest = async () => {
  return axios.post(listUrl, data);
};

import axios from "axios";
const host = "http://localhost:5000";
const curlsUrl = `${host}/curls`;

const testUrl = `${host}/curl`;
const saveDataUrl = `${host}/data`;

export const saveCurlRequest = async (data) => {
  return axios.post(curlsUrl, data);
};
export const saveDataRequest = async (data) => {
  return axios.post(saveDataUrl, data);
};
export const testCurlRequest = async (data) => {
  const curlData = data.curlcmd.join("");
  return axios.post(testUrl, { curlcmd: curlData });
};

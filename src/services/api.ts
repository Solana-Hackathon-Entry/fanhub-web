import axios from "axios";
import { API } from "../env";

const instance = axios.create({
  baseURL: API,
});

export const postForm = async (url: string, body: any) => {
  return instance.postForm(url, body);
};

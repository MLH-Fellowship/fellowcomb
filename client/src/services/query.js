import axios from "axios";
import { CLIENT_URL, BACKEND_SERVER_URL } from "../constants";

export const sendCode = (code) => {
  let redirect_uri;
  redirect_uri = CLIENT_URL;
  redirect_uri = redirect_uri + `/authorize/github`;
  return axios({
    url: `${BACKEND_SERVER_URL}/auth/github`,
    method: "post",
    data: {
      code,
      redirect_uri,
    },
  });
};

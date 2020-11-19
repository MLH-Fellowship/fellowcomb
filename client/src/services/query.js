import axios from "axios";
import { CLIENT_URL } from "../constants";

export const sendCode = (code, accounts_server) => {
  let redirect_uri;
  redirect_uri = CLIENT_URL;
  redirect_uri = redirect_uri + `authorize/github`;
  return axios({
    url: `/auth/github`,
    method: "post",
    data: {
      code,
      redirect_uri,
      accounts_server,
    },
  });
};

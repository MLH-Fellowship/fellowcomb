import axios from "axios";
import { CLIENT_URL, BACKEND_SERVER_URL } from "../constants";

export const sendCode = (code, service, userId) => {
  let redirect_uri;
  redirect_uri = CLIENT_URL;
  redirect_uri = redirect_uri + `/authorize/${service}`;
  return axios({
    url: `${BACKEND_SERVER_URL}/auth/${service}`,
    method: "post",
    data: {
      code,
      redirect_uri,
      userSessionToken: userId,
      tokenScope: "identify guilds",
    },
  });
};

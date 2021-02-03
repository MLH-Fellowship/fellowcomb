export const BACKEND_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://fellowcomb-api.herokuapp.com/"
    : "http://localhost:4000";
export const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? "https://fellowcomb.herokuapp.com/"
    : "http://localhost:3000";

export const BACKEND_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.fellowcomb.space"
    : "http://localhost:4000";
export const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? "https://fellowcomb.space"
    : "http://localhost:3000";

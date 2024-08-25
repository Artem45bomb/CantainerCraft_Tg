import { jwtDecode } from "jwt-decode";

export const decodedJwt = (token: string) => {
  return jwtDecode(token);
};

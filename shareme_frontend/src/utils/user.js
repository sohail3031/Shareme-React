import jwt_decode from "jwt-decode";

import { client } from "./client";

export const createOrGetUser = async (response) => {
  const decode = jwt_decode(response.credential);

  localStorage.setItem("user", JSON.stringify(decode));

  const { name, picture, sub } = decode;
  const doc = { _id: sub, _type: "user", userName: name, image: picture };

  client.createIfNotExists(doc);
};

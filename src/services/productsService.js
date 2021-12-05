import http from "./httpService";

export const getProducts = () => {
  return http.get("/products");
};

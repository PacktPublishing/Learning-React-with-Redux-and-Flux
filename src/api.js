import axios from "axios";

const api = axios.create({
  baseURL: "https://icanhazdadjoke.com",
  headers: {
    Accept: "application/json"
  }
});

export function search({ term = "", page = 1, limit = 10 }) {
  return api.get("/search", { params: { term, page, limit } });
}

export function fetch(id) {
  return api.get(`/j/${id}`);
}

export function random() {
  return api.get("/");
}

import axios from "axios";

// To this URL: https://<YOUR_DOMAIN>/api/<YOUR_CT>
// With the header: Authorization: bearer <YOUR_API_TOKEN>

const API_URL = "http://localhost:1337/api";
const API_TOKEN =
  "a4436541b711ee8168757a879438760350cd7efc5c0c85ba74aef92d188f0c79ee24b8609a56b85db1d485b123087e6ecbe528fe8da76bf5fb5e7c0f3ee2764e9f04a26afd553770c216109be529a2bf55c3814331c5062821a12ca338265028a85643c187c6fb94484bfeacc2f3e41cb49124a1d6fca86baadd79c80d7b9fbb"; // Remplacez par votre API token

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export default api;

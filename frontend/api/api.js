import { createAPIClient } from "./apiHandler";

// const BASE_URL = process.env.REACT_APP_API_URI;
const myApiClient = createAPIClient('http://localhost:8000');

const myApi = {
  getUserData: () => myApiClient.doGet("/users")
};

export default myApi;

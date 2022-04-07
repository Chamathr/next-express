import { createAPIClient } from "./apiHandler";

// const BASE_URL = process.env.REACT_APP_API_URI;
const mode = 'dev'
const baseUri = mode === 'production' ? 'https://usr-app-api.azurewebsites.net' : 'http://localhost:8000'
const myApiClient = createAPIClient(baseUri);

const myApi = {
  getUserData: () => myApiClient.doGet("/users"),
  addUserData: (data) => myApiClient.doPost("/users", data),
  deleteUserData: (data) => myApiClient.doDelete("/users", data),
  editUserData: (data) => myApiClient.doPut("/users", data)
};

export default myApi;

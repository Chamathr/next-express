import { createAPIClient } from "./apiHandler";

// const BASE_URL = process.env.REACT_APP_API_URI;
const mode = 'production'
const baseUri = mode === 'production' ? 'https://user-app-api.azurewebsites.net' : 'http://localhost:8000'
const myApiClient = createAPIClient(baseUri);

const myApi = {
  getUserData: () => myApiClient.doGet("/users")
};

export default myApi;

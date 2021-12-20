import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL === "prod" ? "" : "http://localhost:4000";

function getCategories() {
    return axios.get(`${BASE_URL}/categories`);
}

function getSubjects() {
    return axios.get(`${BASE_URL}/subjects`);
}

function postTest(body) {
    return axios.post(`${BASE_URL}/tests`, body);
}

export {
    getCategories,
    getSubjects,
    postTest,
}
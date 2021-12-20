import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL === "prod" ? "https://kms-repoprovas-back.herokuapp.com" : "http://localhost:4000";

function getCategories() {
    return axios.get(`${BASE_URL}/categories`);
}

function getSubjects() {
    return axios.get(`${BASE_URL}/subjects`);
}

function getTeachers() {
    return axios.get(`${BASE_URL}/teachers`);
}

function postTest(body) {
    return axios.post(`${BASE_URL}/tests`, body);
}

function getTests() {
    return axios.get(`${BASE_URL}/tests`);
}

export {
    getCategories,
    getSubjects,
    getTeachers,
    postTest,
    getTests,
}
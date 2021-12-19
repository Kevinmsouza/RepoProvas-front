import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL === "prod" ? "" : "http://localhost:4000";

function createConfig(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}

export {

}
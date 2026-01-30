import axios from "axios";

//const GITHUB_API_URL = "https://api.github.com/users";

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

//export default GITHUB_API_URL;


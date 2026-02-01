import axios from "axios";

const BASE_URL = "https://api.github.com";

// BASIC USER FETCH
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });

  return response.data;
};

// ADVANCED USER SEARCH
export const searchUsers = async ({
  query,
  location,
  minRepos,
  page = 1,
}) => {
  let q = query;

  if (location) q += ` location:${location}`;
  if (minRepos) q += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: {
      q,
      page,
      per_page: 10,
    },
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : undefined,
    },
  });

  return response.data.items;
};

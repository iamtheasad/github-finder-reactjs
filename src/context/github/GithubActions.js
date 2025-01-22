import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Get Users List
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });

  const response = await github.get(`/search/users?${params}`);
  const data = response.data.items;
  return data;
  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   },
  // });
  // const { items } = await response.json();
  // return items;
};

// Get User And Repos Together
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({ sort: "created", per_page: 10 });

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return {
    user: user?.data,
    repos: repos?.data,
  };
};

// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();

//     return data;
//   }
// };

// // Get Repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({ sort: "created", per_page: 10 });

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   const data = await response.json();
//   return data;
// };

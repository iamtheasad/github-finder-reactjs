<!-- Multiline Code Block -->

```
<!-- Title -->
 ## Prototype

    <!-- Sub Title -->
    ### Home

    <!-- Sub Title descriptor -->
     <h4> Rest Oeprator </h4>

 <!-- Text Bold -->
 **For Bold Text**

 <!-- For Link -->
 [Create React App](https://github.com/facebook/create-react-app)

 <!-- Single Link Code Block -->
 `npm run build`

```

# What I learned from this project

### Daisy UI

### Tailwind

### A tag `rel=noreferrer` should use for external link

### `react-router-dom`

### Getting user data from Github public API

- If need any accessToken it should provide in fetch API's headers as object

```
 useEffect(() => {
   getUsers();
 }, []);

 const getUsers = async () => {
   const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
     headers: {
       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
     },
   });
   const data = await response.json();
   setUsers(data);
   setLoading(false);
 };

```

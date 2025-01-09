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

# How to run

- `npm i`
- `npm start`

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

### Context API

<h4>Create a Context Object</h4>

First, you need to create a context object using the createContext function from the 'react' library. This context object will hold the data that you want to share across your application.

Create a new file named MyContext.js in the src folder and add the following code to create a context object:

```
import { createContext } from 'react';

export const MyContext = createContext("");

```

In the above code, we're importing createContext from React and using it to create a new context object named "MyContext". Then, we are exporting the context object so that we can use it in other parts of our application.

<h4>Wrap Components with a Provider</h4>

Once you've created a context object, you need to wrap the components that need access to the shared data with a Provider component. The Provider component accepts a "value" prop that holds the shared data, and any component that is a child of the Provider component can access that shared data.

It's important to note that the Provider component should be wrapped around the top-level component in an application to ensure that all child components have access to the shared data.

Here's an example that demonstrates how to wrap components with a Provider in Context API:

```
// Create a parent component that wraps child components with a Provider

import { useState, React } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;
```

- We can alos create provider on same file for better experienc

```
import { createContext, useState } from "react";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

```

- Wrap the parent folder with the context provider

```
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
```

<h4>Consume the Context</h4>

```
import { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const { text, setText } = useContext(MyContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, world!')}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;
```

- Also this way

```
import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {users?.map((user) => (
          <UserItem key={user?.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

```

### `useReducer()` hook

- `useReducer()` hook `useState()` are same
- We can use multiple state action at once with `useReducer`
- Whenever `const [state, dispatch] = useReducer(reducer, initialState)` `dispatch()` function call type of that `action` if match with `reducer()` function `action.type`, `reducer()` function will udpate the value

### `new URLSearchParams()`

- The`URLSearchParams()` constructor creates and returns a new URLSearchParams object.
- The URLSearchParams interface defines utility methods to work with the query string of a URL.
- Github search public API `https://api.github.com/search/users?q=iamtheasad`

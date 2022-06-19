### 5. [Create a React state variable to hold API data](https://dev.to/olenadrugalya/ways-of-getting-data-from-api-in-react-2kpf)

Before you start coding make sure to:

- Navigate to the directory `task-05` in your terminal
- Run `npm i` or `npm install`

We need to have a way to store data that we get from the API. We'll use [React's useState](https://reactjs.org/docs/hooks-state.html):

A number of web applications and sites rely on third-party APIs and services for data.

Let's look at how to make an API request to a third party API service. This is an open API. Hence, it requires no authentication.

We will utilize the [Game of Thrones API](https://anapioficeandfire.com/) (aptly named the API of Fire and Ice) to fetch and display all the 12 Game of Thrones books alongside individual details of each book.

We will use JavaScript's built-in [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to go grab data from the API. You can use any HTTP library for your project like [axios](https://github.com/axios/axios). We're using the Fetch built-in one because we don't need to install a package.

We grab and display data in 3 steps:

- Create a React state variable to hold data
- Make the API request and store the data
- Render the returned data

![AGPL Happy coding](https://img.shields.io/badge/Happy_coding-</>-blue.svg)

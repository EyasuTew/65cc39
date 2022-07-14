# Hatchways Frontend Task Part 2: Written Evaluation

**Question1.**
Right now the data for the posts is coming from a json file.  What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

**Answer:** To get the data from an API, we can use FetchAPI, Axios (preferable) library. Here using Axios is preferable because Axios resolves the promise and provide us with the JSON data. In order to fetch the data, we should useEffect hook. Here useEffect hook replaces life cycle methods(componentDidMount, componentDidUpdate) for functional components, which we need to call to load the data. 

We need to consider the following things during the network call:
1.Handle error if network request fails.

2.Show loader in between network request and response.

3.If multiple components use the same API, we can use React Query library to reduce multiple requests for the same API by storing the response of the first-time network request and passing it between components using Context API.

**Question2.**
 
Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

**Answer:**  Using Nanoid will decrease the performance because it prevents React from making optimizations to avoid re-rendering more than it needs to do.

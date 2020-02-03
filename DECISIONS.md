# Technical Decisions

## Backend
First, we go to generate a endpoint using `json-server`. In this case, we will go to postpone the backend implementation 
to be focus in react client. To make it we will use a docker image, and set it as service in `docker-compose.yml`.

## Frontend
I decide to use my custom template, cloned from my [own repository](https://github.com/adrian-afergon/react-boilerplate).
The purpose is to work with a set of tools that help me to improve the development, investing the smallest time in 
configurations or doing repetitive work.

For example:
- Storybook to design components out of the box
- Jest to test components
- Typescript for type components 
- Hygen to generate components structure folder, with test, sass files and stories. 

### Patterns

In fact to apply an architecture, I decide to apply Higher Order Component. In this case, only the
component called in the top of the tree have the knowledge about redux or dependencies that we will use.

The children will receive by props the information to display or a function to execute when an event happen.

By other hand, we will use a layer structure. We can split the application in tree layers:
- View (React components)
- Domain
- Data access (Repository to fetch data)

However in this case, we don't have a custom domain layer, so we can ignore this layer at the moment and 
postpone it to use in the future if we will need.

One important point if that we can inject the object to data access in our components. In the test we can replace 
it easily using mocks and have a relative coverage.

Another point is use mappers in the data fetch by the api and returned by our repository. The idea is in case that the 
data gave by the API change, it can be handled in our Repository and we don't have to propagate the change to the other 
layers.

### Redux
Right now I probably not use Redux in a real project, because with current React features, we can handle the application
state easily using `useContext` and `useReducer` hooks from the original library:

- [useContext](https://es.reactjs.org/docs/hooks-reference.html#usecontext)
- [useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer)


### Redux-thunk
An easy way to handle asynchronous actions and side effects is use libraries to manage it. In this case I use redux-thunk.
Is a good know lib recommended by `redux team`.

In the current react version, they have an experimental feature called `Suspense` to handle asynchronous code and display
for example a spinner. However, It's not working good with `redux` for the moment:
[Reference to the issue](https://github.com/facebook/react/issues/15201#issuecomment-476792529)  

### Test
In some case we want to use a clean store for each test, in other hand, sometimes we want to use a dirty store to check 
how the state change. To make it possible, I create a [render-redux](./web/src/testHelpers/render-redux.tsx) to make
this step easier.

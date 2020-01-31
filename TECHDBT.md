# Technical Deb

- In a first version, the phone list will be define as a list, but to access easily to the state,
is recommended to use a normalized state. In this case we can use Typescript Record Type to improve it:
    - [Typescript reference](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
    - [Normalized state in redux](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/)

- We should parameter the repository to connect different endpoints changing the environment variables

- The ideal way to serve images will be deploy another service from docker, to public this assets, instead to
use it inside `./web/public/images`

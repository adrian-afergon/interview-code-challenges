# Technical Deb

- In a first version, the phone list will be define as a list, but to access easily to the state,
is recommended to use a normalized state. In this case we can use Typescript Record Type to improve it:
    - [Typescript reference](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
    - [Normalized state in redux](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/)

    In this case the problem is that the id field is `number` and making the conversion, typescript lose the safe type.

- The ideal way to serve images will be deploy another service from docker, to public this assets, instead to
use it inside `./web/public/images`

- In the future could have a performance issue: When the user goes to Phone Details. In this case we find
in the state the selected phone. If we navigate to the same page with the same `phone id`, the `react-router-dom` block 
the navigation because it detect that is the same url. 
    
    But, if this behaviour doesn't happens, the component will be 
re-rendered because it understand that its state changes, when truly has the same value.
If this happen an easy way to solve this problem is using the `reselect` library, recommended by `react-redux`, 
for caching the value, and detect that is the same state, so the component would not be re-rendered, unless that we 
request a different phone.

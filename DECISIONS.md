# Technical Decisions

## Backend
First, we go to generate a endpoint using `json-server`. In this case, we will go to postpone the backend implementation 
to be focus in react client. To make it we will use a docker image, and set it as service in `docker-compose.yml`.

## Frontend
I decide to use my custom template, cloned from my [own repository](https://github.com/adrian-afergon/react-boilerplate).
The purpose is to work with a set of tools that help me to improve the development, investing the smallest time in 
configurations or doing repetitive work.

For example:
- Storybook to dessing components out of the box
- Jest to test components
- Typescript for type components 
- Hygen to generate components structure folder, with test, sass files and stories. 


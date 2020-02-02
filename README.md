# Interview Code Challenges
Here you will find some different code challenges options for interviewing at GuideSmiths.

## Java tests
1. [Implement the martian robots game](/java/martian-robots/instructions.md)
2.  [Implement the tennis score game](/java/tennis-score/instructions.md)

## Node tests
1. [Implement the martian robots game](/node/martian-robots/instructions.md)
2.  [Implement the tennis score game](/node/tennis-score/instructions.md)

## React code tests
1. [Build a phone catalogue](/react/phone-catalogue/instructions.md)
2. [Build an app around a misterious API](/react/misterious-api/instructions.md)

# Solution - Adrián Ferrera:

The selected project is:
[Build a phone catalogue](/react/phone-catalogue/instructions.md)

You can check the related info in [technical decisions file](DECISIONS.md)

For review the postponed decisions you can read the [TECHDBT.md](./TECHDBT.md)

# Running the application

**IMPORTANT: In the current version, the ports can't be changed** 

## Prerequisites

To run the application you need:
- docker 19.03
- node 12.13 

## Running
To run the application we need to run two services:
- api
- web
    
### Docker
Both services are dockerized, so you can run it easily using the `docker-compose.yml` file.
If you don't change any configuration file, you only need to run the command from the root project dir:  
 
```bash
docker-compose up
```

It will run the api on port `8080`. To check that everything work with it, you can open a browser and access to the next url:
```
http://localhost:8080/phones
```

It should display the given json file.

For the web application you can try it opening: 
```
http:localhost:3000
```

If everything works, you should display the web application. If you display the list of phones, 
it tell us that the application is running and calling the `api` service. However, if we display a message with text 
`Error network`, this means that the web application can not connect with the `api`.

### Web Local
If you want to run the application without docker, you can do it only with the web project.
It's important to stop the web application in docker to don't have port overlapping. 
To run the web you need `node 12.13.X` installed in your computer. You have to ron the following commands:

```
cd web
npm run start
```

If you want to execute the unit tests:
```
cd web
npm run test
```

In case that you want to run the End-to-End test, remember that you need the `web` and `api` running.
```
cd web
npm run e2e:run
```
It can takes a little time.

### More options

To display more available options, check the specific documentation about the custom template on it own [README.md](./web/README.md)

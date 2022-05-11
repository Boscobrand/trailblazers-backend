# PROJECT 3 - TRAILBLAZERS APP (BACKEND)
A Trail-finding app by  McKenzie Camacho and Tony Bosco

![farmington-canal](https://user-images.githubusercontent.com/57998649/167933313-8dcb2902-5cf5-4882-b725-f0b046917a4e.jpg)

## PROJECT OVERVIEW

The Take a Hike Connecticut app would be the first of a 50 state rollout to encourage hiking and the enjoyment of the great outdoors.  The app gives users the ability to research hiking destinations with relevant information to help plan their outing.

NOTE: This is a full stack application
- This repository is the backend repository for the app 
- The backend is deployed on Heroku: https://take-a-hike-ct.herokuapp.com/api/trail/
- The front end is deployed on Netlify: https://playground--neon-speculoos-911cdd.netlify.app
- The corresponding frontend repository can be found at https://github.com/mckenziecamacho/trailblazers-frontend

## ABOUT THE BACKEND DEPLOYMENT:

The back-end of our App is a Node, Express, and Mongoose API with two models that include a schema for Trails and for Reviews. It follows RESTful architecture in the naming and functionality of all available endpoints.  Create, Read, Update, and Destroy functionality was built-in throughout the app. It was then deployed with the following platforms:

HEROKU:
The back-end is a crucial part of most apps. It's used in operations involving routing, requests, and data. And, as you know, Heroku is a service that lets you get a back-end app up-and-running quickly.  Through this project, we realized the strengths Hiroku has in a fairly simple approach to set up and ease of use from within the editing environment

MONGO DB ATLAS:
MongoDB is a solid application platform for database management and analysis. It integrates easily with other platforms and supports transactional, search, analytics, and mobile use cases while using a common query interface and familiar data models.

POSTMAN:
Postman is a great tool that significantly simplified working with an API. It allows for the use variables so that the same request works whether it's in the testing or staging environment, and also allows for the creation of automated API tests.  It was a helpful tool to test the backend before the front end was developed.

NETLIFY (Front-end) 
Utilized for it's speed and simplicity, and thorough code validation, for deploying the front end.  It is also highly compatible with GitHub.

![P3 TRAIL ERD Diagram 001](https://user-images.githubusercontent.com/57998649/167925999-54a42a61-439e-4c2f-aa73-66b108d1d7f6.png)

## WIREFRAMES

![8611F455-2D96-4FAB-99DC-1C1D25D7E1EE](https://user-images.githubusercontent.com/57998649/167927230-e0c2215c-97ed-496a-90a1-45ee2f56ebc5.png)

## USER STORIES

- As a user, I want to easily search for hiking trails on the site
- As a user, I want to search by name or location
- As a user, I want to be abale to click images and be directed to detailed information
- As a user, I want to see reviews and insights from the other hikers
- As a user, I might be interested in saving the information I have found

## GOALS

For this sprint (less than a week's time), we focused on the following goals:
1) MVP Deployment - Front/Backend Functionality, Components (Header, Image Cards, Search Box/Results, Info Card, Reviews, Button, Menu), Responsive
2) Stretch - User profile, Backpack storage, and Review posts

## COMPONENT DEVELOPMENT

For this project, it became clear that we would have to research and create data to leverage for the development of our API, and develop the JSON files that would be the source of our raw data.

Our primary compoennts included:

- Planning Directory - to aid in development
- App: Handles the Inital API call and establishes Routes to other components through React-Router
- Index: Contains the logic for rendering App component, including React and React Router.
- Database files - including two raw data files, two seed files, and a connection file
- Models files - two schemas to align our data, one for trails and one for reviews
- Controllers - four separate files for managing our API requests and responses
- Routes - to direct flow between components
- Assets - a collection of photo assets were installed in the baackend to be pulled

## PROJECT MANAGEMENT

The team followed daily SCRUM protocols and met for 15 minutes a day to discuss the achievements, the day ahead, and any obstacles we were encountering. GIT PROJECTS was utilized to manage tasks and assignments, and the team operated on a FEATURE BRANCH GIT WORKFLOW  The team was committed to the highly collaborative project, and as SCRUM MANAGER I was equally committed to the process as well.

Our initial timeline estimate was fairly accurate.  We did encounter an issue with one service provider that caused a delay that pushed us back about a day behind schedule unexpectedly.  


![Screen Shot 2022-05-11 at 4 26 22 PM](https://user-images.githubusercontent.com/57998649/167941882-01b2aa03-1321-46d4-a029-3292681e99f6.png)

![Stands P3- 5-9-22 002](https://user-images.githubusercontent.com/57998649/167931177-3edff75b-3217-4d76-a4d0-c2f14be775ba.png)

![Screen Shot 2022-05-09 at 6 38 08 PM](https://user-images.githubusercontent.com/57998649/167931250-e2fa9e36-a3be-4010-80bc-2e826ae344a1.png)

## CODE SNIPPET

This particular seed file code takes the URL we wish to retrieve from and maps through the response. For each object, we create a new record and document in our database using the Mongoose model.
```
const trailInfo = trailRawData.map(trailRawItem => {
    const newTrail = {}
    newTrail.name = trailRawItem.name
    newTrail.location = trailRawItem.location
    newTrail.image = trailRawItem.image
    newTrail.difficulty = trailRawItem.difficulty
    newTrail.miles = trailRawItem.miles
    newTrail.terrain = trailRawItem.terrain
    newTrail.duration = trailRawItem.duration
    newTrail.overview = trailRawItem.overview
    newTrail.website = trailRawItem.website
    return newTrail;
})

Trail.deleteMany({})
    .then(() => {
        Trail.create(trailInfo)
        .then(trails =>{
            console.log(trails)
        })
        .catch(error =>{
            console.log (error)
        })
    })

const reviewInfo = reviewRawData.map(reviewRawItem => {
    const newReview = {}
    newReview.title = reviewRawItem.title
    newReview.rating = reviewRawItem.rating
    newReview.body = reviewRawItem.body
    newReview.author = reviewRawItem.author
    return newReview;
})

Review.deleteMany({})
    .then(() => {
        Review.create(reviewInfo)
        .then(reviews => {
            console.log(reviews)
        })
        .catch(error =>{
            console.log(err)
        })
})

```
## ISSUES AND RESOLUTIONS

We attempted to deliver an asset folder for the images that would be used on the front end with this middleware code:

```
app.use(express.static('assets'))

```
Unfortunately, we were not able to get the API pull from this folder to function prior to deployment.  As a result, we altered our approach to leverage links for the initial deployment of the front end model.  We learned that our solution is more aligned with today's approach of linking images on servers instead of providing them directly through the backend as an asset.








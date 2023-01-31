
<h1 align="center" id="title">Mentimeter</h1>

Mentimeter is an online polling tool which can add an interactive element to a lecture, presentation or recorded session. Question types include Multiple Choice, Ranking, Scales, Word Cloud and Open Ended, among others. It can be used for icebreakers, checking knowledge, gauging opinion and prompting debate. We have cloned the Mentimeter website as project of our construct week at** Masai School**. We built this website fully responsive and implemented maximum design.

## 🛠 Built with 

Technologies used in the project:

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&amp;logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS-007ACC?&style=for-the-badge&logo=css3&logoColor=white)

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&amp;logo=javascript&amp;logoColor=F7DF1E)



## 💻 Screenshots

**Home Page:**
![Homepage](https://user-images.githubusercontent.com/103636380/215677780-fda1ae5a-e83c-42aa-b91f-29e09e67cc10.png)


![Landing](https://user-images.githubusercontent.com/103636380/215678250-15f4e8eb-5e6a-44bc-9236-8d33d5e9bc73.png)


**Login Page:**
![Login](https://user-images.githubusercontent.com/103636380/215678440-115c7292-5bf5-4e95-88e9-b4d17e396c18.png)


**Sign Up:**
![Signup](https://user-images.githubusercontent.com/103636380/215678631-98f3ef03-90c4-4bc2-af95-81006b621574.png)


**Reset Password:**
![Reset](https://user-images.githubusercontent.com/103636380/215678731-b6ade758-6778-41c8-9c7f-8ec21195999a.png)


**Single Sign On:**
![SSO](https://user-images.githubusercontent.com/103636380/215679027-8cd49051-9e5d-42cd-ab92-95fdab6374c2.png)


**Footer:**
![Footer](https://user-images.githubusercontent.com/103636380/215679086-adff09a5-936b-4ea6-8603-3c74fffc95bb.png)



## ✨ Features 

- Live previews
- Fullscreen mode



## 🚀 Demo

**Front-end deployed URL:**

https://shopqmart.vercel.app/
<br/>
https://singular-sundae-186837.netlify.app/

**Back-end deployed URL:**

https://splendid-bear-cap.cyclic.app/

##  📁 Folder structure
#### `Frontend` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our pages
    - #### `pages` - These represent a unique page on the website i.e. Home or About. 
    - #### `redux` - It consists of store, reducer, action and actiontypes and is responsible for global state management of our app.
    - #### `App.js` - This is what renders all of our browser routes and different pages
    - #### `index.js` - This is what renders the react app by rendering App.js.
- #### `package.json` - Defines npm behaviors and packages for the client
#### `Backend` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `middlewares` - This holds all our middlewares used in our application
- #### `models` - This holds all of our data models or business logic
- #### `routes/controllers` - This holds all of our HTTP to URL path associations for each unique url
- #### `index.js` - An entry file for our Node JS application
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!
# Installation

Clone the project
```bash
git clone https://github.com/SCjadhav21/Project_ShopQ_Mart.git
```
## Client-side usage

Go to the project directory

```bash
$ cd frontend          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
```
## Server-side usage

**Environment Variables:-**

To run this project, you will need to add the following environment variables to your .env file

```
port                    // the port on which the server will run
mongoDbUrl              // your mongoDB URI to connect to the mongoDB atlas
key                     // key which will be JWT secret key 
```

**Start**

```bash
$ cd backend            // go to server folder
$ npm i                 // npm install packages
$ npm run server        // run it locally
```
## ✍ Authors 

- [@Harshank11](https://github.com/Harshank11)
- [@Gurjazz18](https://github.com/gurjazz18)
- [@sbj1198](https://github.com/sbj1198)
- [@SCjadhav21](https://www.github.com/SCjadhav21)
- [@CodexPuneet](https://www.github.com/CodexPuneet)
##
This project was built during our construct week at Masai School. It was built by a team of 5 developers and executed in 6 days.
       

# CSCI-5709 (Advance Topics in Web Development)

## Group_2

-   _Date Created_: 31 March, 2023
-   _Last Modification Date_: 31 March, 2023
-   _BID MY RIDE deployed Link of Netlify_: https://thunderous-treacle-c9f408.netlify.app
-   _Git URL for Group2_: https://git.cs.dal.ca/snpatel/csci-5709-grp-02
-   _Server Link of Render_: https://bid-my-ride-server.onrender.com

## Authors:

#

-   Shivam Patel - ( B00917152 )
-   Dixit Ghodadara - ( B00913652 )
-   Shvet Kantibhai Anaghan - ( B00917946 )
-   Utsav Italiya - ( B00935447 )
-   Rutvik Shah - ( B00934537 )
-   Yash Kalwani - ( B00939351 )

# Admin User Credentials

Note: There is no way you can create new admin user. So, please use the below provided credentials. It is important to use the same `SECRET_KEY` provided in the below section "Prerequisites to run the application"

```
Email: admin@dal.ca
Password: Admin@123
```

# Prerequisites to run the application

Create `.env` file at the root level of `server` directory and create an environment variable. This file will look like this:

```
MONGO_URI = <PASTE URI OF MONGODB>
SECRET_KEY = "Shvet@123"
```

# Getting Started

## Prerequisites

-   _Node and npm is the primary requirement_. Run the following command to check if node and npm is available in your system:

```
node -v
npm -v
```

-   _Git cli:_ Download Git command line interface using this [link](https://git-scm.com/downloads). If you are not sure if you have installed git on you machine, run the following command:

```
git -v
```

## How to run application

1. Clone the tutorial repo using the below command.

```
https://git.cs.dal.ca/snpatel/csci-5709-grp-02.git
```

2. Go inside the created folder and install dependencies

```
cd .\csci_5709-grp-02\client
npm install

cd .\csci_5709-grp-02\server
npm install
```

3. Create `.env` file at the root level of `server` directory and create an environment variable. This file will look like this:

```
MONGO_URI = <PASTE URI OF MONGODB>
SECRET_KEY = "Shvet@123"
```

4. Run the application using below command

```
cd client
npm start

cd server
npm run dev
```

## Folder Structure Used

#

### React App:

```
client
├── public
├── src
│   ├── Assets
│   ├── components
│   ├── constants
│   ├── pages
│   ├── redux
│   ├── utils
|   ├── App.scss
|   ├── App.js
|   ├── index.js
|   └── index.scss
```

The project structure of a React frontend app includes a node_modules directory for storing dependencies, a public directory for static assets, and a src directory containing reusable components in a components directory and page components in a pages directory. The main App.js component serves as the root of the app, while the index.js file is responsible for rendering the app to the index.html file. A package.json file contains information about the project, and a README.md file is often used for documentation.

### Node App:

```
server
├── public
│   ├── assets
│   │   └── documents
│   │   └── images
├── src
│   ├── app.js
│   ├── config.js
│   ├── constants
│   ├── controllers
│   ├── models
│   ├── routes
│   └── utils
└── .env
```

We used an MVC architecture. Controllers, Models, and Routes are the three main folders that make up this file. In order to isolate the business logic from publicly accessible assets like photographs and automobile paperwork, we chose to place the static files outside of the core server code. All of the string constants used in the server code may be found in the directory "constants." When the application expands and new features are integrated into the current project, it becomes extremely crucial. 'config.js' is also crucial when discussing scaling. It includes all of the node application's configuration information, such as the backend server's url.

## Technologies & Libraries Used:

-   [React](https://reactjs.org/)
-   [Node](https://nodejs.org/en/)
-   [npm](https://www.npmjs.com/)
-   [react-router-dom](https://www.npmjs.com/package/react-router-dom)
-   [axios](https://www.npmjs.com/package/axios)
-   [lottie-react](https://www.npmjs.com/package/lottie-react)
-   [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
-   [react-dom](https://www.npmjs.com/package/react-dom)
-   [react-icons](https://www.npmjs.com/package/react-icons)
-   [react-redux](https://www.npmjs.com/package/react-redux)
-   [react-scripts](https://www.npmjs.com/package/react-scripts)
-   [redux-logger](https://www.npmjs.com/package/redux-logger)
-   [sass](https://www.npmjs.com/package/sass)
-   [styled-components](https://www.npmjs.com/package/styled-components)
-   [styled-react-modal](https://www.npmjs.com/package/styled-react-modal)
-   [web-vitals](https://www.npmjs.com/package/web-vitals)
-   [archiver](https://www.npmjs.com/package/archiver)
-   [bcryptjs](https://www.npmjs.com/package/bcryptjs)
-   [cors](https://www.npmjs.com/package/cors)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [express](https://www.npmjs.com/package/express)
-   [fs-extra](https://www.npmjs.com/package/fs-extra)
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
-   [mongoose](https://www.npmjs.com/package/mongoose)
-   [multer](https://www.npmjs.com/package/multer)
-   [nodemon](https://www.npmjs.com/package/nodemon)

[![LinkedIn][linkedin-shield-milan]][linkedin-url-milan]
# MERN Blog - A Full-Stack Blogging Platform

MERN Blog is a full-stack blogging platform developed using the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless experience for both bloggers and readers.
## Features

- **User Authentication**: Secure user registration and login system.
- **Create and Edit Posts**: Registered users can create and edit their blog posts using a rich text editor powered by React Quill.
- **Categorized Posts**: Posts can be categorized into various topics such as Sports, Gaming, Finance, and more.
- **Image Upload**: Users can upload images to complement their blog posts.
- **Read and Comment**: Readers can explore and comment on posts.
- **Responsive Design**: The platform is designed to work seamlessly on various devices.

## Built With

<p>Frontend:</p>

-   [![Javascript][Javascript]][Javascript-url]
-   [![React][React.js]][React-url]
-   [![CSS][CSS]][CSS]
  
<p>Backend:</p>

-   [![Node.js][NodeJS]][NodeJS-url]
-   [![Express.js][Express.js]][Express.js-url]
-   [![MongoDB][MongoDB]][MongoDB-url]
-   [![Mongoose][Mongoose]][Mongoose-url]
-   [![Dotenv][Dotenv]][Dotenv-url]

<!-- GETTING STARTED -->
## Getting Started

Follow this guide to run the application.

### Prerequisites

- Have NodeJS installed on your system. You can get NodeJS here: https://nodejs.org/en/download

- Create a free database at MongoDB Atlas:
1. Go to https://www.mongodb.com/cloud/atlas/register and register an account.
2. After logging in click the `Database` item from the left sidebar and then click `Build database`.
3. You will see multiple price plans, select the free one.
4. Select a provider, select the region that is the closest to you, name your database and click on `Create`.
5. On the next page you will need to create an user for the database. Select `Username and Password`, choose an username and a password and click `Create User`.
6. At the bottom of this page click `Add My Current IP Address`.
7. Click `Finish and Close`
8. You will be redirected to the Overview page, if you did everything correctly, the database you created should show up here.
9. Click on `Connect` and then `Compass`. You don't need to download anything, only the connection string is needed from here.
10. Copy the connection string and replace the `<password>` part with the password you previously created for this database. You will need this string in the Installation part of this guide.

### Installation

1. Open the terminal.
2. Clone the repository.
    ```sh
    git clone git@github.com:MilanEgri/mern-blog.git
    ```
3. Navigate into the `client` folder:
   ```sh
   cd mern-blog/client/
   ```
4. Install the NPM packages
    ```sh
    npm install
    ```
5. Navigate into the `server` folder:
   ```sh
   cd ../server/
   ```
6. Install the NPM packages for this folder too
    ```sh
    npm install
    ```
7. Open a text editor and write the following into a new text file:
   ```sh
   MONGO_URL=<your connection string>
   ```
   Replace the `<your connection string>` part with the connection string you copied in the Prerequisites section.
   Save this file in the `/server` directory as `.env` (don't write any name just the .env extension)
    
### Usage

1. Open two separate terminals and navigate to the project directory.
2. Navigate to the `server` folder and run this command:
   ```sh
   node server.js
   ```
   The ExpressJS server will start, leave this running during the usage.
3. Navigate to the `client` folder in the other terminal and run this command:
   ```sh
   npm start
   ```
   The React development server will start, leave this running during the usage.
4. Open your browser and go to this address: http://localhost:3000

## Contact

Milán Egri- milan.egri20@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield-milan]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-milan]: https://www.linkedin.com/in/milanegri/

[Javascript]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black
[Javascript-url]: https://www.javascript.com
[CSS]: https://img.shields.io/badge/css-2c4bdc?style=for-the-badge&logo=CSS3&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-90EE90.svg?style=for-the-badge&logo=MongoDB&logoColor=black
[MongoDB-url]: https://www.mongodb.com
[Mongoose]: https://img.shields.io/badge/Mongoose-8B0000.svg?style=for-the-badge&logo=Mongoose&logoColor=FFFFFF
[Mongoose-url]: https://mongoosejs.com
[Dotenv]: https://img.shields.io/badge/Dotenv-F7DF1E.svg?style=for-the-badge&logo=.ENV&logoColor=black
[Dotenv-url]: https://www.npmjs.com/package/dotenv

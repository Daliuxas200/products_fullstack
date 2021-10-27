# Products listing app

## About

A small project for retrieving and displaying a list of products. Front end was written using pure React, and a server for the API was written using Node.js express.

## Development environment

Dev environment was set up utilising npm _concurrently_ package, which lets us conveniently simultaneously run dev scripts for both front and back end. To start the app first install the npm packages for the root , client, and server directories.

`npm i`

`cd ./server` and `npm i`

`cd ./client` and `npm i`

then to launch the dev server and client together, run in the rood directory

`npm start`

If you want to run client or server separately, you can do that by navigating to respective folders and launching `npm start` for each separately. For client `npm build` can be run to generate a production build.

For compiling of the client files a custom webpack setup was made to handle html files, scss parsing, autoprefixing and minimising, and JSX transpiling. Also prettier was used to homogenise code look. **webpack-merge** was used to separate dev and prod webpack modes into separate files for convenience.

## Server

A small Node.js express based server was set up for providing the API for getting, sorting and paginating products to the client side. Controllers, Routes and App were split into different files for separation of function. dotevn was used to set up config settings, in this case only server port. Products are simply read from the json file.

## Front End

A pure React simple front end, displays a list of products with basic info. Can be sorted by price ascending or descending. Custom pagination implemented with ability to choose products per page count. Handy visual loading effects indicate for the user when the client is loading new data.

Styling for the front end was done using SCSS with the full power of imports, nesting, mixins and variables.

## **Project-8: Back-end**
[Heroku Link]: (https://project8-backend.herokuapp.com/)

## UNOGS API

    * An API of all the new releases and expiring movies of the global Netflix catalog
    * API: [Link](https://rapidapi.com/unogs/api/unogs/details)

# Installations

    * Node
    * Express
    * Mongoose
    * CORS
    * Body-parser
    * React
    * Heroku

# Components

    * Expiring
    * New Releases

# Routes

    * Create: (/update), create a new movie
    * New Releases: (/newReleases) shows all of the new release movies
    * Expiring: (/expiring) shows all of the movies expiring
    * Delete: (/release/:title) Deletes selected movie
    * Update: (/release/:title) Updates title

# Functions

    * Info: Shows the synopsis of the movie onClick
    * Update: Change the title of a movie
    * Delete: Delete a movie from the database
    * Create: Creates a new movie
    
# Issues

    Process exit threw an error, so it had to be deleted in order to seed the database. Only one database was appearing because the other was larger.

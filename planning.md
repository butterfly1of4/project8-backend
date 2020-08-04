# PROJECT 8

## API

We are using the: uNogsNG: api  
View and search by expiring and upcoming movies

# SCHEMA

    ## New:
    1. netflixid
    2. title
    3. image
    4. expiring date
    5. synopsis
    6. release year

    ## Expiring:
    1. netflixid
    2. title
    3. image
    4. expiring date
    5. synopsis
    6. release year
	##NewReleases:
    1. netflixid: String
    2. title: String
    3. image: String
    4. expiring date: String
    5. synopsis: String
    6. release year: String

    ##Expiring:
    1. netflixid: String
    2. title: String
    3. image: String
    4. expiring date: String
    5. synopsis: String
    6. release year: String

# HOME PAGE:

    Navbar elements:
    - static across all pages
    - Generic Movie Logo
    - Search bar with functionality
    - New Release button
    - Expiring Release button
    - Create button
    - Movie theater backdrop

# Functionality:

The create will be a form with add: title, synopsis, imageurl
The search field will track the input to complete auto-fill
The New and Expiring buttons will lead to the pages with the contents
The Search button will search by Year and Title
Searching will open a new page with the infromation

# MOVIE PAGE:

Either Grid layout or Scrolling
Functionality:

1 panel for each movie: - modal popup with the: synopsis, title
\*\*maybe use Semantic for modal - Edit and Delete options on popup - Info button on each image not in modal

# TESTING WITH JEST:

# INSTALL:

Node
React-router-DOM
React-router
Express
Body Parser
Mongoose
CORS
readme
mkdir planning

EXTRAS: Semantic, Axios,

BACKEND:
Heroku
API Fetch/Axios
JSON
2 Models- Schema above
Routes
DB folder:
Cluster-Mongo Atlas
Seed project through Heroku

---

index.js

FRONTEND:
Component library- Storybook
LANDING PAGE:
MOVIES PAGE/S:

To-do:
API: fetch: NewRelease, Expiring


Alex:
=======
GIT WORKFLOW: Git Branching
Alex: 

 heroku config:set DB_URL='mongodb+srv://project8:project8@project8.dzxpw.mongodb.net/project8?retryWrites=true&w=majority'
# back-end-final-project-the-falcon-5ive

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.
Open [http://localhost:3000]

## API GUIDE

Clone server from https://github.com/SchoolOfCode/back-end-final-project-the-falcon-5ive.git
Run using: npm run start

### GET REQUESTS

# Get all users

http://localhost:3000/users

# Get user by email

e.g. shanicebasra@outlook.com

http://localhost:3000/users?email=shanicebasra@outlook.com

# Get note by specific database ID (where id is a number auto assigned by the database)

# Get user by ID

http://localhost:3000/user/id

# Get event by ID

http://localhost:3000/events/id

# Get journey by ID

http://localhost:3000/journey/id

### POST REQUESTS

# CREATE USER

http://localhost:3000/users/

Post a new user where request body is in the form { admin(boolean), name(string), email(string), profileImage(string), cohort(integer), currentRole(string), currentEmployer(string), skills(array of strings), introduction(string), social(string)}.

The ID is autogenerated.

# CREATE JOURNEY

http://localhost:3000/journey/

Post a new user where request body is in the form { uid(integer), employer(string), jobTitle(string), startDate(YYYY-MM-DD string), endDate (YYYY-MM-DD string), description(string)}.

The ID is autogenerated.

# CREATE EVENTS

http://localhost:3000/events/

Post a new user where request body is in the form { eventName(string), eventName(string), uid(integer), date(YYYY-MM-DD), time , description(string), image(string), location(string), enableVolunteers(boolean), attendingList(array of strings), likes(integer), volunteerList(array of strings)}.

The ID is autogenerated.

## PATCH REQUESTS

# E.G. PATCH EVENT BY ID

http://localhost:3000/events/id

Update parameters of an existing event by database ID

Patch an event where request body is in the form { eventName(string), eventName(string), uid(integer), date(YYYY-MM-DD), time , description(string), image(string), location(string), enableVolunteers(boolean), attendingList(array of strings), likes(integer), volunteerList(array of strings)}.

All parameters are not required, only include those that need updating

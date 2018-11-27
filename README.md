### Overview

The goal of this assignment to to create a simple application which updates a sortable list of items in real-time based on updates from a websocket.

### Requirements

The application need only target Chrome, Firefox, or Safari and does not need to worry about backwards compatibility; if it runs in the latest version of your test browser it'll be sufficient.

### Functionality

The application should create a table with 100 rows, with IDs from 0... 99. Each row should have three columns -- the ID, a numerical value, and a name. You should initialize the numerical value to the ID for that row and may choose any initial names that you like. The table should be sorted in descending order by the value in that row. You should feel free to use any scheme you'd like to organize files, etc but note that minifying the app and other steps to productionize are not within the scope of this assignment. You should feel free to polish the development experience or build pipeline if you wish but accomplishing the listed milestones is more important.

### Milestones

1. Application shows a static list with all items
2. Application receives a continuous stream of updates over the websocket and can update the records in place and display them
3. Application is performant when `NUM_ITEMS = 1000` and `MESSAGES_PER_SECOND = 1000` (you'll want to tweak the app to have 1000 rows as well)

### Quick Start

To get started, run `npm i` in the project directory and then navigate to the client/ and run `yarn i`. Then back in the project directory, run `npm start` and the app should be live on localhost:7770.

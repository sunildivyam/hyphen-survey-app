# hyphen-survey-app
HYPHEN Survey App
The App lists down the available surveys and allows the user to add/edit custom questions of a survey.

## Setup
    > goto root folder
    > npm run start
        runs the local dev server on port 3000
    > npm run json-server
        runs the mock json server on port 3004, serving the db.json from root folder. supports all methods (GET, POST, PUT, DELETE)
    > npm run storybook
        runs the storybook on port 3005, where you can see all the UI components
## Features Implemented
    * Internationalization using i18next
    * Theme using 'styled-components'
    * Global Styles using 'styled-components'
    * Given Color Pallete, implemented.
    * State management using 'react-redux' & redux.
    * UI Components created using 'Storybook'
    * Form validations are implemented.
    * Created dataService, that is responsible for fetching/updating and saving data.
## Future TODOs:
    * Create a Loader Service and Show Loading message or a Loader for asynchronous tasks.
    * Create Error Service, and Show Error Messages for failed ajax calls.


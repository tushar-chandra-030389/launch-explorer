# Launch explorer

## Task completed

1. As a user, when I open the app, I want to see all the launches for the next 3 months, plotted on
   a map or globe.

2. As a user, I want to be able to select a start date and an end date so I can filter the launches
   according to my selection.

3. As a user, I want to receive feedback when the app is loading so that I know that when I change
   something in the UI, something is being loaded

4. As a user, I want to be able to filter the launches based on the agencies that are participating in
   the launches that are relevant to my selection of start and end date.

## Architecture used

1. Files are segregated using atom/molecule/organisms/template/pages pattern.
2. To fetch APi date react query is used.
3. UT is added using React testing library and jest.
4. React router dom for routing.
5. Layout is responsive, but the app as whole isn't.

## Enhancements required

1. More UT coverage, I was able to add only 2.
2. Debounce on filter changes.
3. Better UI for loader.
4. State management is done in template component which is not correct.
5. Make the app responsive.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

# App overview

## app info
  ### app content
    - this is a simple blog with
    - a title
    - body
    - author name
  ### features
    - redux thunk
    - webpack
    - backend api call with axios
    - using JSONPlaceholder API [jsonplaceholder](http://jsonplaceholder.typicode.com/)

  ### REDUX THUNK
  ```
  Redux-thunk is a middleware.
  1. It's goal is to help us make requests in redux applications.
  2. Redux-thunk modifies the non-plain javascript object that is returned with async await. It does more than that.
  ```

  ### redux cycle
  1. To change the state of our app, write an ACTION CREATOR
    - the action creator produces an action;
    - the action could be to fetch data from api or backend
  2. The action is then DISPATCH to the redux store
    - this is done when you call it in your component - usu within 'componentDidMount';
    - you must also use connect() function to wrap it up;
    - most likely the response from the action is not a plain object because of async and await
  3. Inside the redux store the action is forwarded into a MIDDLEWARE;
    - The middleware turns it into a plain javascript object
  4. Then a REDUCER picks up the response payload and returns the payload;
    - this updates the current state
  5. The new STATE is available as a prop thanks to mapStateToProp.
  

  ### Loading Data with Redux
  1. components should be rendered onto the screen
  2. action creator gets called from 'componentDidMount' 
  3. action creator runs code to make an API request - this is done via axios - remember that action creator MUST return an object
  4. api responds with data 
  5. action creator responds with data on payload
  5. action creator is wrapped with connect() funtion which updates our redux store
  6. some reducer sees the action and RETURNS the data
  7. The reducer updates the state
  8. mapStateToProps will make it available as props

  ### important errors
  1. 'Actions must be plain obects. Use custom middleware'
  ```
  - this is because of async and await - it makes the object returned fancy...
  - so we are dispatching some fancy object that it not a plain object
  - to solve this, we need a middleware to deal with the asynchronous action
  ```
# Notes:

## Task 2:
  * I soon realised that I had to move the initial state from PearsonUsers to the redux module, because:
    - It’s important to have one complete source of truth. You shouldn’t mix two states (despite the suggestion in the requirements)
    - Storing props in the local state causes problems in React, especially with the deprecation of componentWillRecieveProps()

## Task 3:
  * I went the extra mile: instead of naively adding new users to the state and then removing duplicated users from the state, I only add users to the state if they are not already present on it.
  * Assumption: checking this using the id only is enough.

## Added in refactor:
  * PearsonUser: if avatar was not supplied, or if image failed to load, use avatar-placeholder.png
  * PropTypes and default props

## Tests
My testing experience is unfortunately very limited. For this code challenge I learned the absolute basics of how to use Enzyme to create unit tests for React components. I added some basic tests to PearsonUsers and PearsonUser to demonstrate what I've just learned.

Having said that, I am happy to brush up on testing prior to starting the role.
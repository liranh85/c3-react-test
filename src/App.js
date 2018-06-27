import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { load as loadUsers } from './redux/modules/users';
import PearsonUsers from "./PearsonUsers";

class App extends PureComponent {
  constructor (props) {
    super(props)

    this.props.loadUsers();
  }

  render () {
    const { users } = this.props;

    return (
      <main>
        <PearsonUsers additionalUsers={users.items.data} />
        <hr />

        <p>
          We're looking for production quality code. You're allowed to use any
          external documentation if need to. Please don't hesitate to ask for any
          clarification.
        </p>

        <h2> Stack: </h2>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/hello-world.html">
              React(v16.4.0)
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.github.io/jest/docs/en/expect.html"
            >
              Jest
            </a>
          </li>
          <li>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://airbnb.io/enzyme/docs/api/">
              Enzyme(v3.3.0)
            </a>
          </li>
        </ul>

        <h2> Tasks: </h2>
        <ol>
          <li>
            <p>
              In PearsonUsers.js, render a list of users from the state, displaying
              first_name, last_name and the avatar.
            </p>
          </li>
          <li>
            <p>
              In PearsonUsers.js, fetch the users from a HTTP endpoint and append
              the result to the existing users in the state
              <br />
              <b>URL:</b> https://reqres.in/api/users?page=1&per_page=10
              <br />
              <b>method:</b> GET
            </p>
          </li>
          <li>
            <p>
              In PearsonUsers.js, add functionality to remove duplicated users from
              the state.
            </p>
          </li>
          <li>
            <p>
              In PearsonUsers.js, add functionality to delete a user from the state.
            </p>
          </li>
          <li>
            <p>
              Can you refactor PearsonUsers.js to use a new component to render each
              user profile.
            </p>
          </li>
        </ol>
        <img alt="preview" src="https://i.imgur.com/NbG7tJQ.png" />
      </main>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
